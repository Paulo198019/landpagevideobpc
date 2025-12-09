// Ajustes leves para garantir que o vídeo tente reproduzir em ambientes restritos
// Em alguns navegadores móveis, mesmo com autoplay+muted, pode precisar de uma tentativa programática após interação.
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.then === 'function') {
      p.catch(() => {/* silencioso */});
    }
  };

  // Tenta reproduzir imediatamente
  tryPlay();

  // Garante reprodução após 1ª interação
  ['click','touchstart','keydown'].forEach(evt => {
    window.addEventListener(evt, tryPlay, { once: true });
  });
});
