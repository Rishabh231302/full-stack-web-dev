import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [ FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  date = "";
  work = "";
  todo: {id: number ,work:string , date:string}[]=[];
  addList(){
    this.todo.push({ id: this.todo.length + 1 , work : this.work ,date:this.date})
    this.work = "";
    this.date = "";
  }
  delet(deletID:number){
    this.todo=this.todo.filter((item)=>item.id!=deletID);
  }
}
