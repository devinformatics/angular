import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUserClients(token) {
    return this.http.get<any>(`/api/Login/GetUserClient?authToken=${token}`);
  }

  getLoggedinUserProfile(token:string,profileId:string) {
    return true;
  }
  
  getAll() {
    return true;
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  

  

  delete(id: string) {
    return this.http.delete(`/users/` + id);
  }
}
