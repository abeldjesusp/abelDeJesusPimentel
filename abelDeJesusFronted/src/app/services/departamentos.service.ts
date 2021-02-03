import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { DepartamentosModel } from '../models/departamentos.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private endPoint = 'https://localhost:44357/api/departamentos/';
  private _refresh$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  refresh$() {
    return this._refresh$;
  }

  crear(departamento: DepartamentosModel): Observable<any> {
    return this.httpClient.post(this.endPoint+'/', departamento).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.endPoint)
               .pipe(
                 map((resp) => {
                   return resp;
                 }),
               );
  }

  getById(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.endPoint}/${codigo}`).pipe(
      map((resp) => {
        return resp;
      }),
    );
  }

  update(departamento: DepartamentosModel): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${departamento.codigo}`, departamento).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  delete(departamento: DepartamentosModel): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${departamento.codigo}`, departamento).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}
