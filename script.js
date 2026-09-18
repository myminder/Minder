let total=1,cheios=0,pagina=1,alvoCapa=null;
const binderArea=document.getElementById('binderArea'),binderPage=document.getElementById('binderPage'),modalNovo=document.getElementById('modalNovo'),colorPicker=document.getElementById('colorPicker'),grid=document.getElementById('recentesGrid');
document.getElementById('btnNovo').onclick=e=>{e.stopPropagation();modalNovo.classList.remove('hidden');};
document.getElementById('cancelar').onclick=()=>{modalNovo.classList.add('hidden');document.getElementById('inputNome').value='';};
document.getElementById('criar').onclick=()=>{
  const input=document.getElementById('inputNome');const nome=input.value.trim()||`Binder ${total+1}`;
    const d=document.createElement('div');d.className='binder-card';d.dataset.name=nome;
      d.innerHTML=`<div class="binder" style="--cor:#C69A6B"><div class="lacre"><span></span></div></div><div class="binder-info"><span class="label">${nome}</span><button class="dots-btn" type="button">...</button><div class="menu hidden"><button type="button" data-a="capa">Editar capa</button><button type="button" data-a="renomear">Renomear</button><button type="button" data-a="apagar" class="danger">Apagar</button></div></div>`;
        binderArea.appendChild(d);total++;document.getElementById('cBinders').innerText=total;modalNovo.classList.add('hidden');input.value='';
        };
        binderArea.addEventListener('click',e=>{
          const card=e.target.closest('.binder-card');if(!card)return;
            const dotsBtn=e.target.closest('.dots-btn');const menuBtn=e.target.closest('.menu button');
              if(dotsBtn){e.stopPropagation();const menu=card.querySelector('.menu');const isHidden=menu.classList.contains('hidden');document.querySelectorAll('.menu').forEach(m=>m.classList.add('hidden'));if(isHidden)menu.classList.remove('hidden');return;}
                if(menuBtn){e.stopPropagation();const a=menuBtn.dataset.a;const binder=card.querySelector('.binder');const label=card.querySelector('.label');card.querySelector('.menu').classList.add('hidden');
                    if(a==='capa'){alvoCapa=binder;colorPicker.click();}
                        if(a==='renomear'){const novo=prompt('Novo nome:',label.innerText);if(novo&&novo.trim()){label.innerText=novo.trim();card.dataset.name=novo.trim();}}
                            if(a==='apagar'){if(confirm(`Apagar ${label.innerText}?`)){card.remove();total--;document.getElementById('cBinders').innerText=total;}}return;
                              }
                                binderPage.classList.remove('hidden');
                                });
                                document.addEventListener('click',e=>{if(!e.target.closest('.binder-card'))document.querySelectorAll('.menu').forEach(m=>m.classList.add('hidden'));if(e.target===modalNovo)modalNovo.classList.add('hidden');});
                                colorPicker.oninput=e=>{if(alvoCapa)alvoCapa.style.setProperty('--cor',e.target.value);};
                                document.getElementById('voltar').onclick=()=>binderPage.classList.add('hidden');
                                document.getElementById('verTudo').onclick=()=>alert('Ver tudo');
                                document.querySelectorAll('.slot').forEach(slot=>{
                                  const input=slot.querySelector('input');
                                    slot.addEventListener('click',()=>{if(!slot.querySelector('img'))input.click();});
                                      input.onchange=e=>{
                                          const file=e.target.files[0];if(!file)return;const url=URL.createObjectURL(file);
                                              let img=slot.querySelector('img');if(!img){img=document.createElement('img');slot.appendChild(img);}
                                                  img.src=url;
                                                      if(!slot.dataset.added){cheios++;slot.dataset.added="1";document.getElementById('emptyText').style.display='none';const card=document.createElement('div');card.className='card';card.style.backgroundImage=`url(${url})`;grid.prepend(card);document.getElementById('c1').innerText=cheios;}
                                                          document.getElementById('cheiosInfo').innerText=`${cheios}/4 cheios`;
                                                            };
                                                            });
                                                            document.getElementById('prox').onclick=()=>{pagina=pagina==1?2:1;document.getElementById('paginaInfo').innerText=`Página ${pagina} de 2`;document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i+1==pagina));};
                                                            document.getElementById('ant').onclick=()=>document.getElementById('prox').onclick();