export enum Dominio{
    Docente = "Docente",
    Studente = "Studente"
}

export abstract class Person {
    constructor(protected id: number, protected nome: string, protected cognome: string, protected DataNascita: Date) {}

    abstract get dominio() : string;

    abstract getDettagli(): string;

    get tornaEmail(){
        return this.nome.charAt(0).toLowerCase() + this.cognome.toLowerCase() + '@' + "Dominio".toLowerCase() + '.com';
    }

    calcoloData(dataNascita: Date){
        const oggi = new Date();
        let eta = oggi.getFullYear() - dataNascita.getFullYear();
            
        if (oggi.getMonth() < dataNascita.getMonth() || (oggi.getMonth() === dataNascita.getMonth() && oggi.getDate() < dataNascita.getDate())) {
            eta--;
        }
            return eta;
        }
    
    }

    
// const persona1 = new Person(1, "filippo", "addabbo", "1001", Dominio.Docente);

// console.log(persona1.TornaEmail);
