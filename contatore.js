// Funzione per leggere il valore del cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Funzione per impostare il valore del cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Funzione per aumentare il contatore di visualizzazioni
function aumentaContatore() {
  let contatore = getCookie('pagineVisualizzate');
  if (!contatore) {
    contatore = 1;
  } else {
    contatore = parseInt(contatore) + 1;
  }
  setCookie('pagineVisualizzate', contatore, 30); // Il cookie scade dopo 30 giorni
  document.getElementById('counter').innerText = contatore;
}

// Aumenta il contatore ogni volta che la pagina viene caricata
window.onload = aumentaContatore;
