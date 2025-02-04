import { Person } from "./person"
import { Dominio } from "./person";

class Studente extends Person {

    get dominio(): string {
        return Dominio.Studente;
    }

    getDettagli(){
        return `${this.dominio} : ${this.nome} ${this.cognome}, Professione:${this.dominio}, Età: ${this.calcoloData(this.DataNascita)}, Email: ${this.tornaEmail}`;
    }
}