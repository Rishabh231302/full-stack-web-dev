import { Component } from '@angular/core';

@Component({
  selector: 'app-q7',
  imports: [],
  templateUrl: './q7.component.html',
  styleUrl: './q7.component.scss'
})
export class Q7Component {
  mess = false
  show(){
    this.mess = true
  }
  hide(){
    this.mess = false
  }
  toggle(){
    this.mess =! this.mess
  }
}
