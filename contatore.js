// Funzione per aumentare il contatore di visualizzazioni
function aumentaContatore() {
  let contatore = localStorage.getItem('pagineVisualizzate');
  contatore = contatore ? parseInt(contatore) + 1 : 1;
  localStorage.setItem('pagineVisualizzate', contatore);
  document.getElementById('counter').innerText = contatore;
}

// Aumenta il contatore ogni volta che la pagina viene caricata
window.onload = aumentaContatore;
