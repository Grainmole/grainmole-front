import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TermoSection } from "../../interfaces/models/TermoSection";

@Injectable({
  providedIn: 'root'
})
export class GrainsectionService {

  constructor(private http: HttpClient) { }

  public getGrainSectionInfo(grainSectionId: number): Observable<Array<TermoSection[]>> {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    return this.http.get<Array<TermoSection[]>>(`http://54.152.195.230:8080/grain-sections/${grainSectionId}/termo-sections?timestamp=${formattedDate}`, {headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }});
  }
}
