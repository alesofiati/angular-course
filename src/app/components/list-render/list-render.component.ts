import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animais: Animal[] = [
    { name: "Luke", type: "Cachorro" },
    { name: "Mahi", type: "Gato" },
    { name: "Pandora", type: "Cachorro" }
  ]

  type: string = ''

  constructor(){}

  ngOnInit(): void {}

  showType(animal:Animal): void
  {
    this.type = animal.type
  }

}
