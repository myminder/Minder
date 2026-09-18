let paginas = JSON.parse(localStorage.getItem('paginas') || '[[{},{},{},{}]]');
let paginaAtual = +localStorage.getItem('paginaAtual') || 0;
const salvar=()=>{localStorage.setItem('paginas',JSON.stringify(paginas));localStorage.setItem('paginaAtual',paginaAtual)}
const grid=document.getElementById('bpGrid'), dotsEl=document.getElementById('dots');
const file=document.createElement('input');file.type='file';file.accept='image/*';file.style.display='none';document.body.appendChild(file);
function render(){
  grid.innerHTML=''; paginas[paginaAtual].forEach((d,i)=>{
      const s=document.createElement('div'); s.className=d.url?`slot ${d.status}`:'slot empty';
          if(d.url){s.innerHTML=`<img class="card-img" src="${d.url}"><button class="star"></button><span class="badge ${d.status}">${d.status}</span>`;
                s.querySelector('.badge').onclick=e=>{e.stopPropagation();const o=['desejo','tenho','caminho'];d.status=o[(o.indexOf(d.status)+1)%3];salvar();render()}
                    }else{s.innerHTML=`<span style="font-size:24px">+</span><p style="font-size:11px;text-align:center">toque para colocar<br>um photocard</p>`;
                          s.onclick=()=>{file.onchange=ev=>{const f=ev.target.files[0];if(!f)return;d.url=URL.createObjectURL(f);d.status='desejo';salvar();render()};file.click()}}
                              grid.appendChild(s);
                                });
                                  dotsEl.innerHTML=''; paginas.forEach((_,idx)=>{const dot=document.createElement('span');dot.className='dot'+(idx==paginaAtual?' active':'');dot.onclick=()=>{paginaAtual=idx;salvar();render()};dotsEl.appendChild(dot)});
                                    document.getElementById('paginaInfo').innerText=`Página ${paginaAtual+1} de ${paginas.length}`;
                                    }
                                    document.getElementById('btnNovaPagina').onclick=()=>{paginas.push([{},{},{},{}]);paginaAtual=paginas.length-1;salvar();render()};
                                    document.getElementById('ant').onclick=()=>{if(paginaAtual>0){paginaAtual--;salvar();render()}};
                                    document.getElementById('prox').onclick=()=>{if(paginaAtual<paginas.length-1){paginaAtual++;salvar();render()}};
                                    render();