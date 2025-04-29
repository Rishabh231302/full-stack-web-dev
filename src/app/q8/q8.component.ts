import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-q8',
  imports: [CommonModule],
  templateUrl: './q8.component.html',
  styleUrl: './q8.component.scss'
})
export class Q8Component {
  students = ["Sujit", "Bittu", "Amit" ,"Aditya"];
}
