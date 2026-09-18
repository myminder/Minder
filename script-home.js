// Pega os photocards salvos no binder
let paginas = JSON.parse(localStorage.getItem('paginas') || '[]');
let todos = paginas.flat().filter(c=>c.url);

document.getElementById('qtdCol').innerText = todos.length;
document.getElementById('qtdFav').innerText = todos.filter(c=>c.fav).length || 0;

const lista = document.getElementById('recentesLista');
if(todos.length > 0){
  lista.innerHTML = todos.slice(-4).reverse().map(c=>`<img src="${c.url}" onclick="location.href='binder.html'">`).join('');
  } else {
    // se ainda não tem nada, mostra os da sua foto de exemplo
      lista.innerHTML = `<img src="https://i.imgur.com/8QJ4sQW.jpeg"><img src="https://i.imgur.com/8QJ4sQW.jpeg">`;
      }