import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Storage } from "../../interfaces/Storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  public getAllUserStorages(): Observable<Storage[]> {
    return this.http.get<Storage[]>('http://localhost:8080/users/storages', {headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }});
  }
}
