import {Component, OnInit} from '@angular/core';

import {InformacionService} from "../core/services/informacion.service";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [InformacionService]
})
export class ContactosComponent implements OnInit {
  msg = 'CREDITOS:';
  creditos = false;
  count : number = 0;

  c5 = 0;
  c4 = 0;
  c3 = 0;
  c2 = 0;
  c1 = 0;
  n5 = '';
  n4 = '';
  n3 = '';
  n2 = '';
  n1 = '';
  count1 = 0;
  count2 = '';
  msg1 = '';

  lista = [
    {
      "nombre":"Alison Orellana Rios",
      "descripcion":"Ing. Informática",
      "lugar": "Cochabamba - Bolivia"
    },
    {
      "nombre":"Lilly Zamara Zambrano",
      "descripcion":"Diseñadora gráfica",
      "lugar": "Ocaña - Colombia"
    },
    {
      "nombre":"Diego Romero Cárdenas",
      "descripcion":"Diseñador gráfico",
      "lugar": "Bogotá - Colombia"
    },
  ];


  constructor(private informacion: InformacionService) {

  }

  ngOnInit(): void {
    console.log(this.informacion);
    console.log(this.informacion.total());
  }

  enviarLike5(){
    this.c5 = this.informacion.total5();
    this.n5 = this.informacion.leer5();
    this.conteoLikes5();
    return this.n5;
  }

  enviarLike4(){
    this.c4 = this.informacion.total4();
    this.n4 = this.informacion.leer4();
    this.conteoLikes4();
    return this.n4;
  }

  enviarLike3(){
    this.c3 = this.informacion.total3();
    this.n3 = this.informacion.leer3();
    this.conteoLikes3();
    return this.n3;
  }

  enviarLike2(){
    this.c2 = this.informacion.total2();
    this.n2 = this.informacion.leer2();
    this.conteoLikes2();
    return this.n2;
  }

  enviarLike1(){
    this.c1 = this.informacion.total1();
    this.n1 = this.informacion.leer1();
    this.conteoLikes1();
    return this.n1;
  }

  // enviarLike(){
  //   this.count = this.informacion.total();
  //   this.n = this.informacion.leer();
  //   console.log(this.n);
  //   this.conteoLikesTot();
  //   return this.n;
  // }

  conteoLikesTot(){
    this.count1 = this.informacion.totalSum();
    if (this.count1 == 1){
      this.msg1 = "Ha votado " + this.count1 + " persona";
    } else {
      if (this.count1 == 2){
        window.alert("Gracias por tu interés, seguiremos mejorando!");
      } else if (this.count1 >= 20){
        this.msg1 = "Ha votado "+ this.count1 +" personas, muy bien!";
      }else{
        this.msg1 = "Han votado "+ this.count1 +" personas";
      }
    }
    return this.msg1;
  }

  conteoLikes5(){
    this.c5++;
  }
  conteoLikes4(){
    this.c4++;
  }
  conteoLikes3(){
    this.c3++;
  }

  conteoLikes2(){
    this.c2++;
  }

  conteoLikes1(){
    this.c1++;
  }

  promedio1(){
    this.count2 = this.informacion.promedio();
    return this.count2;
  }

}
