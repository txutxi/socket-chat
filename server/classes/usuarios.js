//Estructura del client:
/*
{
    id: 'kfglñkdgkldh',
    nombre: 'Pepito',
    sala: 'Video Juegos'
}
*/




class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        // this.persona = this.personas.filter(persona => {
        //     return persona.id = id
        // })[0];
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(p => p.sala === sala);
        return personasEnSala;
        // let personasEnSala = this.personas.filter(p => {
        //     return p.sala === sala
        // });

    }

    borrarPersona(id) {
        //reemplazo el array por todos menos el que matchee
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }

}







module.exports = {
    Usuarios
}