import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Students1Service } from '../../students1.service';
import { Student1 } from '../students1.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  students: Student1[];
  constructor(private router: Router, private students1Srv: Students1Service) { }

  ngOnInit() {
    this.students = this.students1Srv.getAllStudents();
  }

  onSubmit(form: NgForm){
    console.log(form);
    const student: Student1 = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    }
    this.students1Srv.addStudent(student);
    this.router.navigateByUrl('/students1');
  }

}
