import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name:string = ''

  constructor(){}

  ngOnInit(): void {}

  onSave():void
  {
    if(this.name == ""){
      alert("Preencha o campo nome")
    }
    alert(`Valor do campo nome ${this.name}`)
  }

}
