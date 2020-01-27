import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    emitCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 8', '.NET', 'NodeJs'];

    constructor(private logService: LogService) {
        console.log('Fui instanciado');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}