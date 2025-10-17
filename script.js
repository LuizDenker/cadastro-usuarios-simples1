document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
  
    const usuario = { nome, email };
    adicionarUsuarioNaLista(usuario);
    
   
    this.reset();
});

function adicionarUsuarioNaLista(usuario) {
    const lista = document.getElementById('listaUsuarios');
    const itemUsuario = document.createElement('div');
    itemUsuario.className = 'usuario-item';
    itemUsuario.textContent = `${usuario.nome} - ${usuario.email}`;
    lista.appendChild(itemUsuario);
}
