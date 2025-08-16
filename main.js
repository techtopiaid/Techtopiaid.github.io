// Hamburger Menu
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.onclick = () => {
  mainNav.classList.toggle('active');
};

// Smooth Scroll
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior:'smooth'});
  mainNav.classList.remove('active');
};

// Cara Bergabung Interaktif Panel
const platformBtns = document.querySelectorAll('.platform-btn');
const panels = {
  trp: document.getElementById('panel-trp'),
  trv: document.getElementById('panel-trv'),
  tl: document.getElementById('panel-tl'),
  jendela: document.getElementById('panel-jendela'),
  gelombang: document.getElementById('panel-gelombang'),
  mac: document.getElementById('panel-mac')
};
platformBtns.forEach(btn => {
  btn.onclick = function() {
    platformBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    Object.values(panels).forEach(panel => panel.classList.remove('active'));
    const plat = btn.getAttribute('data-platform');
    if (panels[plat]) {
      panels[plat].classList.add('active');
      setTimeout(() => {
        panels[plat].scrollIntoView({behavior: 'smooth', block: 'center'});
      }, 330);
    }
  };
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.onclick = function() {
    const parent = this.parentElement;
    const all = document.querySelectorAll('.faq-item');
    if (!parent.classList.contains('active')) {
      all.forEach(item => item.classList.remove('active'));
      parent.classList.add('active');
    } else {
      parent.classList.remove('active');
    }
  }
});