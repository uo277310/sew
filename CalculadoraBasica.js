
class CalculadoraBasica {
    constructor () {
        this.memoria = 0;
        this.pantalla = 0;
        this.res = "";
    }
    numero(numero) {
        this.pantalla = Number(this.pantalla) * 10 + Number(numero);
        document.getElementById("pantalla").value = this.pantalla;
    }
    sumar() {
        this.memoria += " + ";
    }
    mostrar(){
        document.getElementById("pantalla").value = eval(this.memoria);
    }
}

var c = new CalculadoraBasica();
