"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PersonaService {
    constructor() {
        this.baseUrl = "http://localhost:5223/api/person";
    }
    getPersone() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/GetPersone`);
            if (!response.ok) {
                throw new Error('Errore nel recupero delle persone');
            }
            return yield response.json();
        });
    }
    addPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/AddPersona`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(persona),
            });
            if (!response.ok) {
                throw new Error('Errore nell\'aggiungere la persona');
            }
            return yield response.json();
        });
    }
    updatePersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/UpdatePersona`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(persona),
            });
            if (!response.ok) {
                throw new Error('Errore nell\'aggiornare la persona');
            }
            return yield response.json();
        });
    }
    deletePersona(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}/DeletePersona?id=${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Errore nell\'eliminare la persona');
            }
        });
    }
}
const Persona1 = new PersonaService();
Persona1.getPersone().then(console.log).catch(console.error);
