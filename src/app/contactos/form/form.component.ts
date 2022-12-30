import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  datos:any[]=[{nombre:'angular',apellido:'js',edad:12}]

  constructor(){}

  ngOnInit(): void {
  }
  registrar(nombre:string,apellido:string,edad:string){
   this.datos.push({nombre,apellido,edad})
   
  }
}
