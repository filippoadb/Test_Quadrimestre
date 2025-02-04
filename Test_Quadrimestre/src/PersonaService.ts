import { Person } from "./person";

class PersonaService {
    async getPersone(): Promise<Person[]> {
        const response = await fetch('http://localhost:5223/PersonaController/GetPersone');
        if (!response.ok) {
            throw new Error('Errore nel recupero delle persone');
        }
        return await response.json();
    }
 
    async addPersona(persona: Person): Promise<Person> {
        const response = await fetch('http://localhost:5223/PersonaController/AddPersona', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        });
        if (!response.ok) {
            throw new Error('Errore nell\'aggiungere la persona');
        }
        return await response.json();
    }
 
    async updatePersona(persona: Person): Promise<void> {
        const response = await fetch('http://localhost:5223/PersonaController/UpdatePersona', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        });
        if (!response.ok) {
            throw new Error('Errore nell\'aggiornare la persona');
        }
    }
 
    async deletePersona(id: string): Promise<void> {
        const response = await fetch(`http://localhost:5223/PersonaController/DeletePersona/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Errore nell\'eliminare la persona');
        }
    }
}

const Persona1 = new PersonaService();
Persona1.getPersone();
