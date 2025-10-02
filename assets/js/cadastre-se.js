 const password = document.getElementById('password')
   const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuário(){
   const nome = document.getElementById('nome')
   const email = document.getElementById('email')
  

   if (password.value == confirmaPassword.value){
    //Cadastrar mo local storage

    //Verifica se a lista exite no local storage
  let lista = window.localStorage.getItem('usuarios')

    if (lista == undefined){
        //Não existe a lista, então cria e adiciona o usuáriob
        lista = []

        //Adicionar o usuário na lista
        let usuario = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value
        }
        lista.push(usuario)

        //Salvar no local storage
        window.localStorage.setItem('usuarios', JSON.stringify(lista))
        alert('Usuario cadastrado')
    } else{
        // Adicionar novos usuarios
        //Primeiro buscar a lista no local storage
        let listaE = window.localStorage.getItem ('usuarios')
        listaE = JSON.parse(listaE)
        let usuarioA = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value
        }

        //Adiciona na lista
        listaE.push(usuarioA)

        //Salavano local storage
        window.localStorage.setItem('usuarios', JSON.stringify(listaE))
        alert ('Usuario cadastrado')



        //Limpar os dados dos formularios
        nome.value = ''
        email.value = ''
        password.value = ''
        confirmaPassword.value = ''

    }
   } else{
    alert ('Senha incorreta, verifique seus dados')
    password.value = ''
    confirmaPassword.value = ''
   }
}

function toggleSenha() {
    const exibirSenha = document.getElementById('exibir-senha')

   if (exibirSenha.checked == true) {
    //Mostrar as senhas
    password.type = 'text'
    confirmaPassword.type = ' text'
   } else {
    //Esconder as senhas 
     password.type = 'text'
    confirmaPassword.type = 'password'

   }

}