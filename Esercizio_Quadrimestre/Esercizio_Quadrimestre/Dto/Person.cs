using Esercizio_Quadrimestre.Dto;
using System;


public class Person
{
    //enum Dominio
    //{
    //    Docenti = 0,
    //    Studenti = 1,
    //}
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Cognome { get; set; }
    public DateTime DataNascita { get; set; }

    public Dominio Dominio  { get; set; }
    public string Email {  get; set; }
}
