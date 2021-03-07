import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EntityRepositoryService<T> {
  constructor(private httpService: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem(environment.TOKEN_KEY),
    }),
  };

  getAll(_baseUrl: string): Observable<T[]> {
    return this.httpService.get<T[]>(
      environment.URL + _baseUrl,
      this.httpOption
    );
  }

  getBy(_url: string): Observable<T> {
    return this.httpService.get<T>(
      environment.URL +  _url,
      this.httpOption
    );
  }

  get(_url: string, id: number): Observable<T> {
    console.log(id);
    return this.httpService.get<T>(
      environment.URL +  _url + '/' + id,
      this.httpOption
    );
  }

  add(_url: string, _content: any): Observable<T> {
    return this.httpService.post<T>(
      environment.URL +  _url,
      _content,
      this.httpOption
    );
  }

  update(_url: string, _content: any): Observable<T> {
    return this.httpService.put<T>(
      environment.URL +  _url,
      _content,
      this.httpOption
    );
  }

  delete(_url: string, id: number): Observable<T> {
    return this.httpService.delete<T>(
      environment.URL +  _url + '/' + id,
      this.httpOption
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu. ' + error.error.message;
    } else {
      errorMessage = 'Sistemsel Hata';
    }

    return throwError(errorMessage);
  }
}
