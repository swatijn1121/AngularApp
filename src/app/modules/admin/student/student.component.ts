import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  studentData: any;

  ngOnInit(): void {
    this.getStudents();
    this.getStudentByID(1);
  }

getStudents()
{
  this.service.get()
  .subscribe(result => {
    console.log(result);
    this.studentData = result;
    console.log(this.studentData);
  }, err => {
    console.log(err);
  });
}

getStudentByID(id)
{
  this.service.getById(id)
  .subscribe(x => console.log(x),);
}

}
