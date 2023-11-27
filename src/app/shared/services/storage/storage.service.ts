import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Storage } from "../../interfaces/models/Storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  public getAllUserStorages(): Observable<Storage[]> {
    return this.http.get<Storage[]>('http://54.152.195.230:8080/users/storages', {headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }});
  }
}
