
class Elevator {
    constructor(capacidadeMax = 10, andarMax = 10, andarMin = 0){
        this.andarMax = andarMax;
        this.andarMin = andarMin;
        this.andarAtual = 0;
        this.capacidade = 0;
        this.capacidadeMax = capacidadeMax; 
    }

    move(targetFloor) {
        if(targetFloor < this.andarMin || targetFloor > this.andarMin) {
            console.log('andar inválido');
            return
        }
        else if(this.andarAtual > targetFloor) {
            this.andarAtual -= 1;
        }
        else if(this.andarAtual < targetFloor){
            this.andarAtual += 1;
        }
        else {
            this.andarAtual += 0;
        }
    }
    
    getStatus(){
        return (
            this.andarAtual,
            this.capacidade
        )
    }

    entrada(passageiros) {
        if(this.capacidade + passageiros > this.capacidadeMax) {
            console.log("Carga máxima excedida");
            return false;
        }
        this.capacidade += passageiros;
        console.log(`${passageiros} entraram. Capacidade atual ${this.capacidade}`);
        return true;
    }
    saida(passageiros){
        if(this.capacidade - passageiros < 0) {
            console.log("Não há passageiros suficiente");
            return false;
        }
        this.capacidade -= passageiros;
        console.log(`${passageiros} passageiros saíram. Capacidade atual: ${this.capacidade}`);
        return true;
    }


}

module.exports = Elevator;