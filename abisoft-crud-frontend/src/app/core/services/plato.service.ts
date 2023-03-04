import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private httpClient: HttpClient) {
  }

  protected customHeaders() {
    return {
      'content-type': 'application/json',
    };
  }

  getAll() {
    return this.httpClient.get<any>(environment.apiURL + '/platos', {
      headers: this.customHeaders(),
    });
  }

  getById(id: number) {
    return this.httpClient.get<any>(environment.apiURL + '/platos/' + id, {
      headers: this.customHeaders(),
    });
  }

  create(request: any): Observable<any> {
    return this.httpClient.post<any>(environment.apiURL + '/platos/', JSON.stringify(request),
      {headers: this.customHeaders()})
      .pipe(retry(1), catchError(this.handleError));
  }

  edit(id: number, request: any): Observable<any> {
    return this.httpClient.put<any>(environment.apiURL + '/platos/' + id, JSON.stringify(request),
      {headers: this.customHeaders()})
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiURL + '/platos/' + id,
      {headers: this.customHeaders()})
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
