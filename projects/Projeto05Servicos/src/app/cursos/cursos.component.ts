import { Component, OnInit } from '@angular/core';

import { CursosService } from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursoService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
