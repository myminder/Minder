let paginas=[[{},{},{},{}]]; let paginaAtual=0, slotAberto=null;
const grid=document.getElementById('bpGrid'), dotsEl=document.getElementById('dots'), fileGlobal=document.getElementById('fileGlobal');
function render(){
  grid.innerHTML=''; paginas[paginaAtual].forEach((d,i)=>{
      const slot=document.createElement('div'); slot.className=d.url?`slot ${d.status}`:'slot empty';
          if(d.url){
                slot.innerHTML=`<img class="card-img" src="${d.url}"><button class="star"></button><span class="badge ${d.status}">${d.status==='tenho'?'Tenho':d.status==='caminho'?'A caminho':'Desejo'}</span>`;
                      slot.querySelector('.card-img').onclick=e=>{e.stopPropagation(); slotAberto=i; fileGlobal.onchange=ev=>{const f=ev.target.files[0];if(!f)return;d.url=URL.createObjectURL(f);render();};fileGlobal.click();};
                            slot.querySelector('.star').onclick=e=>{e.stopPropagation(); slotAberto=i; document.getElementById('cardModalImg').src=d.url; document.getElementById('cardNome').value=d.nome||''; document.getElementById('cardTipo').value=d.tipo||'ALBUM'; document.getElementById('cardModal').classList.remove('hidden');};
                                  slot.querySelector('.badge').onclick=e=>{e.stopPropagation(); const o=['desejo','tenho','caminho']; d.status=o[(o.indexOf(d.status)+1)%3]; render();};
                                      }else{
                                            slot.innerHTML=`<span style="font-size:24px;color:#6a8074">+</span><p style="font-size:10px;color:#5a6f65;font-weight:600;text-align:center">toque para colocar<br>um photocard</p>`;
                                                  slot.onclick=()=>{fileGlobal.onchange=ev=>{const f=ev.target.files[0];if(!f)return; paginas[paginaAtual][i]={url:URL.createObjectURL(f),nome:'',tipo:'ALBUM',status:'desejo'}; render();}; fileGlobal.click();};
                                                      }
                                                          grid.appendChild(slot);
                                                            });
                                                              dotsEl.innerHTML=''; paginas.forEach((_,idx)=>{const dot=document.createElement('span');dot.className='dot'+(idx===paginaAtual?' active':'');dot.onclick=()=>{paginaAtual=idx;render();};dotsEl.appendChild(dot);});
                                                                document.getElementById('paginaInfo').innerText=`Página ${paginaAtual+1} de ${paginas.length}`; document.getElementById('cheiosInfo').innerText=`${paginas[paginaAtual].filter(x=>x.url).length}/4 cheios`;
                                                                }
                                                                document.getElementById('btnNovaPagina').onclick=()=>{paginas.push([{},{},{},{}]); paginaAtual=paginas.length-1; render();};
                                                                document.getElementById('ant').onclick=()=>{if(paginaAtual>0){paginaAtual--;render();}};
                                                                document.getElementById('prox').onclick=()=>{if(paginaAtual<paginas.length-1){paginaAtual++;render();}};
                                                                document.getElementById('salvarCard').onclick=()=>{const d=paginas[paginaAtual][slotAberto];d.nome=document.getElementById('cardNome').value;d.tipo=document.getElementById('cardTipo').value;document.getElementById('cardModal').classList.add('hidden');};
                                                                document.getElementById('fecharCard').onclick=()=>document.getElementById('cardModal').classList.add('hidden');
                                                                render();