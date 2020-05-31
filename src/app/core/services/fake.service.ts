import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FakePost } from 'src/app/shared/models/fake-post';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<FakePost[]>(environment.fakeapiUrl + '/posts');
  }

  getUsers(){
    return this.http.get<any>(environment.fakeapiUrl + '/users');
  }

}
