import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

studentMarks : any[] = [
  {
    name:'Name 1',
    email:'email@gmail.com',
    mark:55,
    
  },
  {
    name:'Name 2',
    email:'email2@gmail.com',
    mark:30,
  
  }
];
isPass(mark:number):boolean{
  return mark > 50;
}
}
