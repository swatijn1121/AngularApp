import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }

  login(data): Observable<any>{
    return this.http.post(environment.baseUrl + '/Account', data, {responseType: 'text' as  'json'});
  }
}
