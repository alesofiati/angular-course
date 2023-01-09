import { User } from './interfaces/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-curso';
  userData:User = {
    id: 1,
    name: 'Alexandre',
    email:'alexandresofiati@gmail.com'
  }
}
