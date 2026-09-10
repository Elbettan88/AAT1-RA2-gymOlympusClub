import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private http = inject(HttpClient);
  private url = "http://localhost:3000/api";

  get(recurso: string): Observable<any> { return this.http.get(`${this.url}/${recurso}`); }
  post(recurso: string, body: any): Observable<any> { return this.http.post(`${this.url}/${recurso}`, body); }
  put(recurso: string, id: string, body: any): Observable<any> { return this.http.put(`${this.url}/${recurso}/${id}`, body); }
  delete(recurso: string, id: string): Observable<any> { return this.http.delete(`${this.url}/${recurso}/${id}`); }
}
