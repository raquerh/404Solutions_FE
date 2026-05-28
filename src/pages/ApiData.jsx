import { useState, useEffect, useRef } from 'react';
import './ApiData.css';

const DEFAULT_SEARCH = 'rock';
const ITEMS_PER_PAGE = 8;

function formatDuration(ms) {
  if (!ms) return '--:--';
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function ApiData() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(DEFAULT_SEARCH);
  const [inputValue, setInputValue] = useState(DEFAULT_SEARCH);
  const [playingId, setPlayingId] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      setError(null);
      setCurrentPage(1);
      stopAudio();

      try {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=50&country=AR`
        );
        if (!response.ok) throw new Error('Error al cargar los datos');
        const data = await response.json();
        setTracks(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [searchTerm, retryCount]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingId(null);
  };

  const togglePreview = (track) => {
    if (!track.previewUrl) return;

    if (playingId === track.trackId) {
      stopAudio();
      return;
    }

    stopAudio();
    const newAudio = new Audio(track.previewUrl);
    newAudio.play();
    newAudio.onended = () => setPlayingId(null);
    audioRef.current = newAudio;
    setPlayingId(track.trackId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) setSearchTerm(inputValue.trim());
  };

  const totalPages = Math.ceil(tracks.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentTracks = tracks.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToPage = (page) => setCurrentPage(page);

  if (loading) {
    return (
      <div className="api-data">
        <div className="loading-container">
          <div className="terminal-loader">
            <span className="loading-text">&gt; Conectando con iTunes API</span>
            <span className="loading-dots">...</span>
          </div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-data">
        <div className="error-container">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="title">error.log</span>
          </div>
          <div className="error-content">
            <h2>&gt; ERROR_</h2>
            <p className="error-message">
              <span className="prompt">&gt;</span> {error}
            </p>
            <button className="nav-button" onClick={() => setRetryCount(c => c + 1)}>
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="api-data">
      <div className="api-header">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">music_explorer.exe</span>
        </div>
        <h1>&gt; Explorador de Música_</h1>
        <p className="subtitle">
          <span className="api-badge">iTunes Search API</span>
          {tracks.length} canciones encontradas para &quot;{searchTerm}&quot;
        </p>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <span className="search-prompt">&gt;</span>
          <input
            type="text"
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Buscar artista, canción o álbum..."
          />
        </div>
        <button type="submit" className="search-btn">Buscar</button>
      </form>

      {tracks.length === 0 ? (
        <div className="no-results">
          <p>&gt; No se encontraron resultados para &quot;{searchTerm}&quot;</p>
        </div>
      ) : (
        <>
          <div className="tracks-grid">
            {currentTracks.map((track) => (
              <article key={track.trackId} className="track-card">
                <div className="track-artwork-wrapper">
                  <img
                    src={track.artworkUrl100.replace('100x100', '300x300')}
                    alt={track.collectionName || track.trackName}
                    className="track-artwork"
                    loading="lazy"
                  />
                  {track.previewUrl && (
                    <button
                      className={`preview-btn ${playingId === track.trackId ? 'playing' : ''}`}
                      onClick={() => togglePreview(track)}
                      aria-label={playingId === track.trackId ? 'Detener preview' : 'Escuchar preview'}
                    >
                      {playingId === track.trackId ? '⏹' : '▶'}
                    </button>
                  )}
                </div>

                <div className="track-info">
                  <h3 className="track-name">{track.trackName}</h3>
                  <p className="track-artist">{track.artistName}</p>
                  <p className="track-album">{track.collectionName || '—'}</p>

                  <div className="track-meta">
                    <span className="track-genre">{track.primaryGenreName}</span>
                    <span className="track-duration">{formatDuration(track.trackTimeMillis)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination-container">
            <div className="pagination-info">
              <p>
                <span className="prompt">&gt;</span> Página {currentPage} de {totalPages}
              </p>
              <p className="items-info">
                Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, tracks.length)} de {tracks.length} canciones
              </p>
            </div>

            <div className="pagination-controls">
              <button
                className="pagination-btn"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                aria-label="Página anterior"
              >
                ← Anterior
              </button>

              <div className="page-numbers">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => goToPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                    return <span key={pageNumber} className="page-ellipsis">...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                className="pagination-btn"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ApiData;
