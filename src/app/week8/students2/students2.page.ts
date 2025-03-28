import { Component, OnInit } from '@angular/core';
import { Students2Service } from '../students2.service';
import { Student2 } from './students2.model';

@Component({
  selector: 'app-students2',
  templateUrl: './students2.page.html',
  styleUrls: ['./students2.page.scss'],
})
export class Students2Page implements OnInit {
  students: Student2[];
  constructor(private students2Srv: Students2Service) { }

  ngOnInit() {
    this.students = this.students2Srv.getAllStudents();
    console.log(this.students);
  }

}
