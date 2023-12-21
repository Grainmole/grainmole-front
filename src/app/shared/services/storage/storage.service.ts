import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Storage } from "../../interfaces/models/Storage";
import { StorageRequest } from "../../types/StorageRequest";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storages = new BehaviorSubject<Storage[]>([]);

  constructor(private http: HttpClient) { }

  public getAllUserStorages(): Observable<Storage[]> {
    return this.http.get<Storage[]>('http://3.228.5.134:8080/users/storages', {headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }});
  }

  public addStorage(storage: StorageRequest): Observable<Storage> {
    return this.http.post<Storage>('http://3.228.5.134:8080/storages', JSON.stringify(storage), {headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json'
    }});
  }
}
