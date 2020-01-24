import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrls: ['./diretiva-if.component.css']
})
export class DiretivaIfComponent implements OnInit {

  cursos: string[] = ['Angular 8'];
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
