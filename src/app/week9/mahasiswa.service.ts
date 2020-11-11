import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  constructor(private http: HttpClient) { }

  getAllStudents(){
    //return this.http.get('http://localhost:8080/select.php');
    return this.http.get('http://ionic2020api.seedlab.id/mahasiswa/select.php');
  }

  insertMhs(newMhs: any){
    const mhs = {
      nim: newMhs.nim,
      nama: newMhs.nama,
      prodi: newMhs.prodi
    };
    const data = JSON.stringify(mhs);
    //return this.http.post<any>('http://localhost:8080/insert.php', data);
    return this.http.get('http://ionic2020api.seedlab.id/mahasiswa/insert.php');
  }

  deleteMhs(nim: string){
    const data = JSON.stringify({id: nim});
    //return this.http.post<any>('http://localhost:8080/delete.php', data);
    return this.http.get('http://ionic2020api.seedlab.id/mahasiswa/delete.php');
  }
}
