
class CalculadoraBasica {
    constructor () {
        this.memoria = 0;
        this.pantalla = "";
        this.pos = 1;

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName >= 0){
                this.numero(keyName);
            }
            if(keyName == "+"){
                this.sumar();
            }
            if(keyName == "-"){
                this.restar();
            }
            if(keyName == "*"){
                this.multiplicar();
            }
            if(keyName == "/"){
                this.dividir();
            }
            if(keyName == "."){
                this.punto();
            }
            if(keyName == "Backspace"){
                this.borrar();
            }
            if(keyName == "Enter"){
                this.mostrar();
            }
        });
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
            this.pantalla = "" + Number(eval(this.memoria));
        else
            this.pantalla = "";
        document.getElementById("pantalla").value = eval(this.memoria);
    }
    mostrar(){
        try { 
            document.getElementById("pantalla").value = eval(this.pantalla);
            this.memoria = Number(eval(this.pantalla));
        }
        catch(err) {
            document.getElementById("pantalla").value = "Error = " + err;
        }
        finally {
            this.pantalla = "";
        }
    }
}

var c = new CalculadoraBasica();
