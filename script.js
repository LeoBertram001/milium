let pontos = 120;
let pontosPendentes = 0;

function mostrar(id) {
  const seções = ['home', 'pontuacao', 'produtos', 'login', 'registro', 'validarCompra'];
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

function confirmarCompra(pontosGanhos) {
  pontosPendentes = pontosGanhos;
  mostrar('validarCompra');
}

function registrarCompra() {
  const nota = document.getElementById('codigoNota').value;
  const data = document.getElementById('dataCompra').value;
  const loja = document.getElementById('lojaCompra').value;

  if (nota && data && loja) {
    pontos += pontosPendentes;
    pontosPendentes = 0;
    document.getElementById('pontosUsuario').innerText = pontos;
    alert('Compra registrada com sucesso! Seus pontos foram adicionados.');
    mostrar('pontuacao');
  } else {
    alert('Por favor, preencha todas as informações para validar sua compra.');
  }
}

mostrar('home');
