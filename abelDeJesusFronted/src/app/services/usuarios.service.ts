import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { UsuariosModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private endPoint = 'https://localhost:44357/api/usuarios/';
  private _refresh$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  refresh$() {
    return this._refresh$;
  }

  crear(usuario: UsuariosModel): Observable<any> {
    return this.httpClient.post(this.endPoint, usuario).pipe(
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

  getById(id: number): Observable<any> {
    return this.httpClient.get(`${this.endPoint}${id}`).pipe(
      map((resp) => {
        return resp;
      }),
    );
  }

  update(usuario: UsuariosModel): Observable<any> {
    return this.httpClient.put(`${this.endPoint}${usuario.id}`, usuario).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}
