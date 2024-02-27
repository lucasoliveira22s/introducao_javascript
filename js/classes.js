class Usuario {
    constructor(login, senha){
        this.login = login;
        this.senha = senha;
    }
    validarLogin(){
        return this.login.toString().includes('@')
        && this.login.toString().includes ('.')
        ? '- Login válido'
        : '- Login inválido';
    }
}

const usuario1 = new Usuario('lucas@gmail.com', '1234');
console.log(usuario1.login, usuario1.validarLogin());

const usuario2 = new Usuario('lucas', '123');
console.log(usuario2.login, usuario2.validarLogin());

class Administrador extends Usuario{
    constructor(login, senha, resumoProfissional){
        super(login,senha);
        this.resumoProfissional = resumoProfissional;
    }
}

const administrador1 = new Administrador('administrador1@gmail.com', 'Utrl1', 'Resumo profissional');
console.log(administrador1.login, administrador1.validarLogin());
console.log(usuario2.resumoProfissional, administrador1.resumoProfissional)