(() => {
  const viewport = document.getElementById('appViewport');
  const canvas = document.getElementById('appCanvas');
  const baseWidth = 1024;
  const baseHeight = 768;

  function fitLandscapeCanvas() {
    const landscape = window.matchMedia('(orientation: landscape)').matches;
    document.documentElement.dataset.landscape = String(landscape);
    if (!landscape) return;

    const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight, 1);
    viewport.style.width = `${Math.round(baseWidth * scale)}px`;
    viewport.style.height = `${Math.round(baseHeight * scale)}px`;
    canvas.style.transform = `scale(${scale})`;
  }

  fitLandscapeCanvas();
  window.addEventListener('resize', fitLandscapeCanvas, { passive: true });
  window.addEventListener('orientationchange', fitLandscapeCanvas, { passive: true });
})();
