import { ListService } from 'src/app/services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animais: Animal[] = []

  type: string = ''

  constructor(private listService: ListService){
    this.getAnimals()
  }

  ngOnInit(): void {}

  showType(animal:Animal): void
  {
    this.type = animal.type
  }

  removeAnimal(animal:Animal):void
  {
    if(confirm(`Você deseja remover o animal ${animal.name}`)){
      this.animais = this.listService.remove(this.animais, animal)
      console.log("Animal removido")
    }
  }

  getAnimals(): void
  {
    this.listService.getAll().subscribe((animals) => (this.animais = animals))
  }

}
