const modal = document.getElementById('modal');
const btnNovo = document.getElementById('btnNovoBinder');
const btnCriar = document.getElementById('criar');
const btnCancelar = document.getElementById('cancelar');
const input = document.getElementById('binderName');
const area = document.getElementById('binderArea');
const numBinders = document.getElementById('numBinders');
const recentes = document.getElementById('recentesGrid');

let total = 1;

btnNovo.onclick = () => { modal.classList.remove('hidden'); input.focus(); }
btnCancelar.onclick = () => { modal.classList.add('hidden'); input.value=''; }
modal.onclick = (e) => { if(e.target===modal) btnCancelar.onclick(); }

btnCriar.onclick = () => {
  const nome = input.value.trim() || `Binder ${total+1}`;
    const card = document.createElement('div');
      card.className = 'binder-card';
        card.innerHTML = `<div class="binder" style="background:#${Math.floor(Math.random()*16777215).toString(16)}"></div><span>${nome} <span class="dot"></span></span>`;
          area.appendChild(card);
            
              // adiciona nos recentes
                const rec = document.createElement('div');
                  rec.className = 'recente-item';
                    recentes.prepend(rec);
                      
                        total++;
                          numBinders.innerText = total;
                            modal.classList.add('hidden');
                              input.value='';
                              }

                              document.getElementById('verTudo').onclick = () => alert('Aqui vai abrir sua página de todos os recentes!');