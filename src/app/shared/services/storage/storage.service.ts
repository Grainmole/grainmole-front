import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Storage } from "../../interfaces/models/Storage";
import { StorageRequest } from "../../types/StorageRequest";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  public getAllUserStorages(): Observable<Storage[]> {
    return this.http.get<Storage[]>('http://localhost:8080/users/storages', {headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }});
  }

  public addStorage(storage: StorageRequest): Observable<Storage> {
    return this.http.post<Storage>('http://localhost:8080/storages', JSON.stringify(storage), {headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json'
    }});
  }
}
