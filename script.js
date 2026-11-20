(() => {
  const t = document.getElementById('toggle');
  const root = document.documentElement;
  let dark = false;
  t.addEventListener('click', () => {
    dark = !dark;
    if(dark){
      root.style.setProperty('--bg', '#0f1115');
      root.style.setProperty('--fg', '#e8e6ea');
      root.style.setProperty('--card', '#15161d');
    } else {
      root.style.removeProperty('--bg');
      root.style.removeProperty('--fg');
      root.style.removeProperty('--card');
    }
  });
  document.querySelectorAll('button[data-target]').forEach(b => {
    b.addEventListener('click', () => {
      const target = document.querySelector(b.dataset.target);
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
})();