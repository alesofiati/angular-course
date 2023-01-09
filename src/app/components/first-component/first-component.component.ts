import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
  name:String = 'Alexandre Soffiatti Santos'
  hobbies = ["Jogar", "Ler", "Programar", "Estudar"]

  constructor() {}

  ngOnInit(): void {

  }

}
