import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaService } from '../mahasiswa.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  res: any = [];
  data: Observable<any>;
  constructor(private mhsSrv: MahasiswaService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);

    const mhs = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    };

    this.mhsSrv.insertMhs(mhs).subscribe(res=>{
      console.log(res);
    });
    
    this.router.navigateByUrl('/index');
  }
}
