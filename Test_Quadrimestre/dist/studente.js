"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const person_2 = require("./person");
class Studente extends person_1.Person {
    get dominio() {
        return person_2.Dominio.Studente;
    }
    getDettagli() {
        return `${this.dominio} : ${this.nome} ${this.cognome}, Professione:${this.dominio}, Età: ${this.calcoloData(this.DataNascita)}, Email: ${this.tornaEmail}`;
    }
}
