import { Component ,effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InpNameComponent } from './inp-name/inp-name.component';
import { Q6Component } from './q6/q6.component';
import { Q8Component } from './q8/q8.component';
import { Q7Component } from './q7/q7.component';
import { TodoComponent } from './todo/todo.component';
import { NgIf } from '@angular/common';
import { Q10Component } from './q10/q10.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,InpNameComponent,Q6Component,Q8Component,Q7Component ,TodoComponent ,NgIf,Q10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
