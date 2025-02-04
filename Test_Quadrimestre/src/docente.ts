import { Person } from "./person"
import { Dominio } from "./person";

export class Docente extends Person {

    get dominio(): string {
        return Dominio.Docente;
    }

    getDettagli(){
        return `${this.dominio} : ${this.nome} ${this.cognome}, Professione:${this.dominio}, Età: ${this.calcoloData(this.DataNascita)}, Email: ${this.tornaEmail}`;
    }
}
