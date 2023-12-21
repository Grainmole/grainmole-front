import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { GrainSection } from "../../interfaces/models/GrainSection";
import { GrainSectionRequest } from "../../types/GrainSectionRequest";

@Injectable({
  providedIn: 'root'
})
export class StorageDetailsService {
  grainSectionList = new BehaviorSubject<GrainSection[]>([]);

  constructor(private http: HttpClient) {
  }

  public getAllStorageGrainSections(storageId: number): Observable<GrainSection[]> {
    return this.http.get<GrainSection[]>(`http://3.228.5.134:8080/storages/${storageId}/grain-sections`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
  }

  public addGrainSection(grainSection: GrainSectionRequest): Observable<GrainSection> {
    return this.http.post<GrainSection>('http://3.228.5.134:8080/grain-sections', JSON.stringify(grainSection), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json'
      }
    });
  }
}
