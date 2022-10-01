import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, throwError } from 'rxjs'
import { SignProps } from './auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public sign(payload: SignProps): Observable<any> {
    return this.http.post(`${this.url}/sign`, payload).pipe(
      map((response) => {
        return console.log(response)
      }),
      catchError((error) => {
        if (error.error.message) return throwError(() => error.error.message)
        return throwError(() => 'Ocorreu um erro ainda não mapeado!')
      }),
    )
  }
}
