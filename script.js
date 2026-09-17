const input = document.querySelector('.search input');
const cards = document.querySelectorAll('.card');
const countEl = document.querySelector('.count');

input.addEventListener('input', () => {
  const termo = input.value.toLowerCase().trim();
    let visiveis = 0;
      cards.forEach(card => {
          const nome = card.querySelector('h3').innerText.toLowerCase();
              const coreano = card.querySelector('.kr').innerText.toLowerCase();
                  const mostrar = nome.includes(termo) || coreano.includes(termo);
                      card.style.display = mostrar ? 'block' : 'none';
                          if(mostrar) visiveis++;
                            });
                              countEl.innerText = visiveis + ' grupos';
                                if(termo === '') countEl.innerText = '1.046 grupos';
                                });

                                document.querySelectorAll('.star-btn').forEach(btn => {
                                  btn.addEventListener('click', () => {
                                      btn.style.opacity = btn.style.opacity === '0.3' ? '1' : '0.3';
                                          btn.querySelector('svg').style.fill = btn.style.opacity === '0.3' ? 'none' : '#facc15';
                                            });
                                            });