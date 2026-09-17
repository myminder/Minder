let total=1, cheios=0, pagina=1;
const binderArea=document.getElementById('binderArea'), grid=document.getElementById('recentesGrid'), binderPage=document.getElementById('binderPage'), modalNovo=document.getElementById('modalNovo');

document.getElementById('btnNovo').onclick=()=>modalNovo.classList.remove('hidden');
document.getElementById('cancelar').onclick=()=>modalNovo.classList.add('hidden');
document.getElementById('criar').onclick=()=>{
  const nome=document.getElementById('inputNome').value||`Binder ${total+1}`;
    const cor=document.getElementById('inputCor').value;
      const d=document.createElement('div'); d.className='binder-card'; d.dataset.name=nome;
        d.innerHTML=`<div class="binder" style="--cor:${cor}"><div class="lacre"><span></span></div></div><div class="binder-info"><span class="label">${nome}</span><button class="dots-btn">⋮</button></div>`;
          binderArea.appendChild(d); total++; document.getElementById('cBinders').innerText=total;
            modalNovo.classList.add('hidden'); bind();
              document.getElementById('inputNome').value='';
              };
              function bind(){ document.querySelectorAll('.binder-card').forEach(c=>c.onclick=(e)=>{ if(e.target.classList.contains('dots-btn')) return; binderPage.classList.remove('hidden'); }); } bind();

              document.getElementById('voltar').onclick=()=>binderPage.classList.add('hidden');
              document.getElementById('verTudo').onclick=()=>alert('Ver tudo');
              document.querySelectorAll('.slot').forEach(slot=>{
                const input=slot.querySelector('input');
                  slot.onclick=()=>{ if(!slot.querySelector('img')) input.click(); };
                    input.onchange=e=>{
                        const file=e.target.files[0]; if(!file) return;
                            const url=URL.createObjectURL(file);
                                let img=slot.querySelector('img'); if(!img){ img=document.createElement('img'); slot.appendChild(img); }
                                    img.src=url;
                                        const existing = slot.dataset.added ? false : true;
                                            if(existing){ cheios++; slot.dataset.added="1"; }
                                                document.getElementById('cheiosInfo').innerText=`${cheios}/4 cheios`;
                                                    document.getElementById('emptyText').style.display='none';
                                                        if(existing){
                                                              const card=document.createElement('div'); card.className='card'; card.style.backgroundImage=`url(${url})`; grid.prepend(card);
                                                                    document.getElementById('c1').innerText=cheios;
                                                                        }
                                                                          };
                                                                          });
                                                                          document.getElementById('prox').onclick=()=>{ pagina=pagina==1?2:1; document.getElementById('paginaInfo').innerText=`Página ${pagina} de 2`; document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i+1==pagina)); };
                                                                          document.getElementById('ant').onclick=()=>document.getElementById('prox').onclick();