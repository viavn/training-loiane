import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor() {
        console.log('Fui instanciado');
    }

    getCursos() {
        return ['Angular 8', '.NET', 'NodeJs'];
    }
}