import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
    getCursos() {
        return ['Angular 8', '.NET', 'NodeJs'];
    }
}