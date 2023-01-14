import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0
  numerosGerados:any = []

  constructor(){}

  ngOnInit(): void {}

  onChangeNumber()
  {
    let numero = Math.floor(Math.random() * 1000)

    if(!this.numerosGerados.includes(numero)){
      this.myNumber = numero
      this.numerosGerados.push(numero)
    }
  }

}
