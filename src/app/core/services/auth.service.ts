import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, map, Observable, throwError } from 'rxjs'
import { AuthResponseProps, SignProps } from './auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient, private router: Router) {}

  public sign(payload: SignProps): Observable<any> {
    return this.http.post<AuthResponseProps>(`${this.url}/sign`, payload).pipe(
      map((response) => {
        localStorage.removeItem('angular_auth')
        localStorage.setItem('angular_auth', response.token)
        return this.router.navigate(['admin'])
      }),
      catchError((error) => {
        if (error.error.message) return throwError(() => error.error.message)
        return throwError(() => 'Ocorreu um erro ainda não mapeado!')
      }),
    )
  }

  public logout() {
    localStorage.removeItem('angular_auth')
    return this.router.navigate([''])
  }
}
