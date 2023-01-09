import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size:number = 18
  font:string = 'Arial'
  color:string = 'red'

  classes = ["green-title", "small-title"]
  underline = 'sublinhado'

  constructor(){}

  ngOnInit(): void {

  }
}
