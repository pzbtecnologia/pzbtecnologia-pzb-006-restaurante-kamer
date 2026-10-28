'use strict';
// Site demonstrativo não oficial. Não inserir contatos não confirmados.
const nav = document.getElementById('nav');
const menu = document.getElementById('menuMobile');
function fecharMenu() {
  nav.classList.remove('ativo');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
  menu.textContent = '☰';
}
menu.addEventListener('click', () => {
  const aberto = nav.classList.toggle('ativo');
  menu.setAttribute('aria-expanded', String(aberto));
  menu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  menu.textContent = aberto ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', fecharMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') fecharMenu(); });
const filtros = document.querySelectorAll('[data-filter]');
filtros.forEach(botao => botao.addEventListener('click', () => {
  filtros.forEach(outro => {
    const ativo = outro === botao;
    outro.classList.toggle('active', ativo);
    outro.setAttribute('aria-pressed', String(ativo));
  });
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = botao.dataset.filter !== 'todos' && card.dataset.category !== botao.dataset.filter;
  });
}));
document.getElementById('anoAtual').textContent = String(new Date().getFullYear());
