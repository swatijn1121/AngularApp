import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from 'src/app/shared/models/student';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getHeader(): HttpHeaders
  {
    const token = localStorage.getItem('token');
    const headerX = new HttpHeaders({Accept : 'application/json', Authorization : `Bearer ${token}`});
    return headerX;
  }

  get(): Observable<Student[]>
  {
    const headerVal = this.getHeader();
    return this.http.get<Student[]>(`${environment.baseUrl}/Student`, {headers: headerVal});
    // Need to map return data with interface array
    // .pipe(map((response: Student[]) => response as Student[]));
  }

  getById(id: number): Observable<Student>
  {
    const headerVal = this.getHeader();
    return this.http.get<Student>(`${environment.baseUrl}/Student/${id}`, {headers: headerVal});
  }

}
