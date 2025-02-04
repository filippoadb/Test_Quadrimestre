import { Person } from "./person";

class PersonaService {
    private baseUrl: string = "http://localhost:5223/api/person";

    async getPersone(): Promise<Person[]> {
        const response = await fetch(`${this.baseUrl}/GetPersone`);
        if (!response.ok) {
            throw new Error('Errore nel recupero delle persone');
        }
        return await response.json();
    }

    async addPersona(persona: Person): Promise<Person> {
        const response = await fetch(`${this.baseUrl}/AddPersona`, {
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

    async updatePersona(persona: Person): Promise<Person> {
        const response = await fetch(`${this.baseUrl}/UpdatePersona`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        });

        if (!response.ok) {
            throw new Error('Errore nell\'aggiornare la persona');
        }

        return await response.json();
    }

    async deletePersona(id: string): Promise<void> {
        const response = await fetch(`${this.baseUrl}/DeletePersona?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Errore nell\'eliminare la persona');
        }
    }
}

const Persona1 = new PersonaService();
Persona1.getPersone().then(console.log).catch(console.error);
