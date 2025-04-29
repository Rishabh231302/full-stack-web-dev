import { Component } from '@angular/core';

@Component({
  selector: 'app-inp-name',
  imports: [],
  templateUrl: './inp-name.component.html',
  styleUrl: './inp-name.component.scss'
})
export class InpNameComponent {
  name=''
  input_name(event:Event){
    this.name = (event.target as HTMLInputElement).value
  }
}
