import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  count : number = -1;
  ms = '';
  nombreEmpresa = 'ZADIAL';
  count5 : number = 0;
  count4 : number = 0;
  count3 : number = 0;
  count2 : number = 0;
  count1 : number = 0;
  countS : number = 0;
  prom = 0;
  cc5 = 0;
  cc4 = 0;
  cc3 = 0;
  cc2 = 0;
  cc1 = 0;

  constructor() { }

  total(){
    this.count++;
    return this.count;
  }

  // leer(c1:number){
  //   if(c1 == 1){
  //     this.ms = "Le gusta a "+ c1 +" persona";
  //   }else if(c1 >= 20){
  //     this.ms = "Les gusta a "+ c1 +" personas, muy bien!";
  //   }else{
  //     this.ms = "Les gusta a "+ c1 +" personas";
  //   }
  //   return this.ms;
  // }

  getNombreEmpresa(){
    return this.nombreEmpresa;
  }

  totalSum(){
    this.countS = this.count5 + this.count4 + this.count3 + this.count2 + this.count1;
    // this.ms = this.leer(this.countS);
    // console.log(this.ms)
    return this.countS;
  }

  total5(){
    this.count5++;
    return this.count5;
  }
  total4(){
    this.count4++;
    return this.count4;
  }
  total3(){
    this.count3++;
    return this.count3;
  }
  total2(){
    this.count2++;
    return this.count2;
  }
  total1(){
    this.count1++;
    return this.count1;
  }

  leer5(){
    return this.voto(this.count5);
  }
  leer4(){
    return this.voto(this.count4);
  }
  leer3(){
    return this.voto(this.count3);
  }
  leer2(){
    return this.voto(this.count2);
  }
  leer1(){
    return this.voto(this.count1);
  }

  promedio(){
    this.cc5 = this.count5 * 5;
    this.cc4 = this.count4 * 4;
    this.cc3 = this.count3 * 3;
    this.cc2 = this.count2 * 2;
    this.cc1 = this.count1 * 1;
    this.prom = (this.cc5 + this.cc4 + this.cc3 + this.cc2 + this.cc1)/this.totalSum();
    this.prom = Math.round(this.prom)
    if (this.prom > 0){
      this.ms = this.prom + " estrellas";
    }else{
      this.ms = '';
    }
    return this.ms;
  }

  voto(c:number){
    if(c == 1){
      this.ms = c +" voto";
    }else{
      this.ms = c +" votos";
    }
    return this.ms;
  }
}
