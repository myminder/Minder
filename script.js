// script.js - AQUI FICA TODA A LÓGICA DOS BOTÕES
let binders = [{name:'New binder', color:'#CC7A4A'}];

function render(){ /* cria os binders, menu 3 pontinhos, editar, renomear, apagar */ }

document.getElementById('novoBtn').onclick = ()=>{ binders.push({name:'Binder '+(binders.length+1), color:'#CC7A4A'}); render(); }