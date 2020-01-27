import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 8', '.NET', 'NodeJs'];

    constructor() {
        console.log('Fui instanciado');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }
}