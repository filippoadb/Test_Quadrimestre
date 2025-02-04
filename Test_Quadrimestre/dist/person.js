"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Dominio = void 0;
var Dominio;
(function (Dominio) {
    Dominio["Docente"] = "Docente";
    Dominio["Studente"] = "Studente";
})(Dominio || (exports.Dominio = Dominio = {}));
class Person {
    constructor(id, nome, cognome, DataNascita) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.DataNascita = DataNascita;
    }
    get tornaEmail() {
        return this.nome.charAt(0).toLowerCase() + this.cognome.toLowerCase() + '@' + "Dominio".toLowerCase() + '.com';
    }
    calcoloData(dataNascita) {
        const oggi = new Date();
        let eta = oggi.getFullYear() - dataNascita.getFullYear();
        if (oggi.getMonth() < dataNascita.getMonth() || (oggi.getMonth() === dataNascita.getMonth() && oggi.getDate() < dataNascita.getDate())) {
            eta--;
        }
        return eta;
    }
}
exports.Person = Person;
// const persona1 = new Person(1, "filippo", "addabbo", "1001", Dominio.Docente);
// console.log(persona1.TornaEmail);
