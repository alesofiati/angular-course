import { User } from '../../interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() usuario!:User


  constructor(){}

  ngOnInit(): void {

  }
}
