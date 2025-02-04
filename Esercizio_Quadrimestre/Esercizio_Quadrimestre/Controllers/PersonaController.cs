using Esercizio_Quadrimestre.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Test_quadrimestre.Controllers
{
    [ApiController]
    [Route("api/person")]
    public class PersonController : ControllerBase
    {
        private List<Person> listaPersone = new List<Person>();

        public PersonController()
        {
            
            if (!listaPersone.Any())
            {
                listaPersone.Add(new Person
                {
                    Id = Guid.NewGuid(),
                    Nome = "Lello",
                    Cognome = "Laforgia",
                    DataNascita = new DateTime(2003, 08, 02),
                    Dominio = Dominio.Studente,
                    Email = "asdsad@gmail.com"
                });

                listaPersone.Add(new Person
                {
                    Id = Guid.NewGuid(),
                    Nome = "Lello",
                    Cognome = "Laforgia",
                    DataNascita = new DateTime(2003, 08, 02),
                    Dominio = Dominio.Studente,
                    Email = "asdsad@gmail.com"
                });
            }
        }

        [HttpGet("GetPersone")]
        public IEnumerable<Person> GetPersone()
        {
            return listaPersone;
        }

        [HttpPost("AddPersona")]
        public IActionResult AddPersona([FromBody] Person persona)
        {
            if (persona == null)
            {
                return BadRequest("Persona non valida");
            }

            if (persona.Id == Guid.Empty)
            {
                persona.Id = Guid.NewGuid();
            }

            listaPersone.Add(persona);
            return Ok(true);
        }

        [HttpPut("UpdatePersona")]
        public IActionResult UpdatePersona([FromBody] Person persona, [FromQuery] string valore)
        {
            var existingPerson = listaPersone.FirstOrDefault(p => p.Id == persona.Id);
            if (existingPerson == null)
            {
                return NotFound("Persona non trovata");
            }

            existingPerson.Nome = persona.Nome;
            existingPerson.Cognome = persona.Cognome;
            existingPerson.DataNascita = persona.DataNascita;
            existingPerson.Dominio = persona.Dominio;
            existingPerson.Email = persona.Email;

            return Ok(true);
        }

        [HttpDelete("DeletePersona")]
        public IActionResult DeletePersona([FromQuery] Guid id)
        {
            var persona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null)
            {
                return NotFound("Persona non trovata");
            }

            listaPersone.Remove(persona);
            return Ok(true);
        }
    }
}