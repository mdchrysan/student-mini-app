import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  mahasiswa: any;
  constructor(private mhsSrv: MahasiswaService) { }

  ngOnInit() {
    this.mhsSrv.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key , ...c.payload.val()})))
    ).subscribe(data=>{
      this.mahasiswa = data;
      console.log(data);
    })
  }

  delete(event, key){
    console.log(key);
    this.mhsSrv.delete(key).then(res=>{
      console.log(res);
    })
  }
}
