import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent implements OnInit {
  count:number = 0
  mutipleOfTwo = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]

  constructor(){
  }

  ngOnInit(): void {

  }

  contador():void
  {
    this.count++
    this.isMutipleOfTwo();
  }

  isMutipleOfTwo():void
  {
    if(this.mutipleOfTwo.includes(this.count)){
      console.log(`Este é um número mutiplo de dois ${this.count}`)
    }
  }

  onSave():void
  {
    console.log('Estou salvando as informações')
  }

}
