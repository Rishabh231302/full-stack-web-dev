import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  num = 0
  increment(){
    this.num++
  }
  decrement(){
    if (this.num==0){
      this.num = 0
    }
    else{
      this.num--
    }

  }
}
