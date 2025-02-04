import { Person } from "./person";

class PersonaService {
    private baseUrl: string = "http://localhost:5223/api/person";

    async getPersone(): Promise<Person[]> {
        const url = `${this.baseUrl}/GetPersone`; 
        return this.fetchData<Person[]>(url);
    }

    async addPersona(persona: Person): Promise<Person> {
        return this.sendData<Person>('POST', `${this.baseUrl}/AddPersona`, persona);
    }

    async updatePersona(persona: Person): Promise<Person> {
        return this.sendData<Person>('PUT', `${this.baseUrl}/UpdatePersona`, persona);
    }

    async deletePersona(id: string): Promise<void> {
        const response = await fetch(`${this.baseUrl}/DeletePersona?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Errore nell\'eliminare la persona');
        }
    }

    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Errore nella richiesta GET: ${url}`);
        }
        return await response.json();
    }

    private async sendData<T>(method: string, url: string, body: any): Promise<T> {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Errore nella richiesta ${method}: ${url}`);
        }

        return await response.json();
    }
}

const personaService = new PersonaService();

personaService.getPersone().then(console.log).catch(console.error);

