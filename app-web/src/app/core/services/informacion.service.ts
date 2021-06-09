import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  count : number = -1;
  likesPersonas = document.getElementById("likes");
  ms = '';
  constructor() { }

  total(){
    this.count++;
    return this.count;
  }

  leer(){
    if(this.count == 1){
      this.ms = "Le gusta a "+ this.count +" persona";
    }else if(this.count >= 100){
      // this.likesPersonas.innerText="Les gusta a "+ this.count +" personas, muy bien!";
      this.ms = "Les gusta a "+ this.count +" personas, muy bien!";
    }else{
      this.ms = "Les gusta a "+ this.count +" personas";
    }
    return this.ms;
  }
}
