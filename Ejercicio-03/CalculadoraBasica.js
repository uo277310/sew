
class CalculadoraBasica {
    constructor () {
        this.memoria = 0;
        this.pantalla = "";
        this.pos = 1;
    }
    numero(numero) {
        this.pantalla += Number(numero);
        document.getElementById("pantalla").value = this.pantalla;
    }
    sumar() {
        this.pantalla += "+";
        document.getElementById("pantalla").value = this.pantalla;
    }
    restar() {
        this.pantalla += "-";
        document.getElementById("pantalla").value = this.pantalla;
    }
    multiplicar() {
        this.pantalla += "*";
        document.getElementById("pantalla").value = this.pantalla;
    }
    dividir() {
        this.pantalla += "/";
        document.getElementById("pantalla").value = this.pantalla;
    }
    punto() {
        this.pantalla += ".";
        document.getElementById("pantalla").value = this.pantalla;
    }
    borrar() {
        this.pantalla = "";
        document.getElementById("pantalla").value = "";
    }
    mmas() {
        this.memoria = Number(this.memoria) + Number(this.pantalla);
    }
    mmenos() {
        this.memoria = Number(this.memoria) - Number(this.pantalla);
    }
    mrc() {
        if(eval(this.memoria) != 0)
            this.pantalla = "" + eval(this.memoria);
        else
            this.pantalla = "";
        document.getElementById("pantalla").value = eval(this.memoria);
    }
    mostrar(){
        if(this.pantalla != "") {
            document.getElementById("pantalla").value = eval(this.pantalla);
            this.memoria = eval(this.pantalla);
            this.pantalla = "";
        }
    }
}

var c = new CalculadoraBasica();
