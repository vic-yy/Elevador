const Elevator = require ('../models/elevator');
const elevator = new Elevator();

exports.move = (req, res) => {
    const { targetFloor } = req.body;
    elevator.move(targetFloor);
    res.status(200).send({message: 'o elevador está se movimentando'})
}

exports.getStatus = (req, res) => {
    const {andar, capacidade} = elevator.getStatus()
    res.status(200).send(andar,capacidade);
}

exports.entrada = (req, res) => {
    const { passageiros } = req.body;
    const andou = elevator.entrada(passageiros);
    if (andou) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
};

exports.saida = (req, res) => {
    const { passageiros } = req.body;
    const andou = elevator.saida(passageiros);
    if (andou) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
}