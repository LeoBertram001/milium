let pontos = 120;

function mostrar(id) {
  const seções = ['home', 'pontuacao', 'produtos', 'login', 'registro'];
  seções.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) el.classList.remove('active');
  });

  if (id === 'home') {
    document.getElementById('home').classList.add('active');
    document.getElementById('pontuacao').classList.add('active');
  } else {
    document.getElementById(id).classList.add('active');
  }
}

function ganharPontos(valor) {
  pontos += valor;
  document.getElementById('pontosUsuario').innerText = pontos;
  alert(`Você ganhou ${valor} pontos! Total: ${pontos} pontos.`);
}

mostrar('home');