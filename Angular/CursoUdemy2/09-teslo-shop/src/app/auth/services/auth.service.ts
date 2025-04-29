import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';
import { environment } from '@environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
const baseUrl = environment.url;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(sessionStorage.getItem('token'));

  private http = inject(HttpClient);

  user = computed(this._user);
  token = computed(this._token);
  isAdmin = computed(() => this._user()?.roles.includes('admin') ?? false);

  checkStatusResources = rxResource({
    loader: () => this.checkStatus()
  })

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';

    if (this._user()) return 'authenticated';

    return 'not-authenticated';
  });


  login(email: string, password: string): Observable<boolean> {
    const url = `${baseUrl}/auth/login`;

    return this.http
      .post<AuthResponse>(url, {
        email,
        password,
      })
      .pipe(
        map((response) => this.handleAuthSuccess(response)),
        catchError((error: any) => this.handleAuthError(error)),
      );
  }

  checkStatus(): Observable<boolean> {
    const token = sessionStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }
    const url = `${baseUrl}/auth/check-status`;

    return this.http
      .get<AuthResponse>(url)
      .pipe(
        map((response) => this.handleAuthSuccess(response)),
        catchError((error: any) => this.handleAuthError(error)),
      );
  }

  logout(): void {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-authenticated');

    sessionStorage.removeItem('token');
  }

  register(email: string, password: string, fullName: string): Observable<boolean> {
    const url = `${baseUrl}/auth/register`;

    return this.http
      .post<AuthResponse>(url, {
        email,
        password,
        fullName,
      })
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  private handleAuthSuccess({ token, user }: AuthResponse) {
    this._authStatus.set('authenticated');
    this._user.set(user);
    this._token.set(token);

    sessionStorage.setItem('token', token);

    return true;
  }

  private handleAuthError(error: any) {
    this.logout();

    return of(false);
  }
}
