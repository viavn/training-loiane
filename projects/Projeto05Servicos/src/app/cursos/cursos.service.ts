import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 8', '.NET', 'NodeJs'];

    constructor() {
        console.log('Fui instanciado');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}