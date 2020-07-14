import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient) { }

  private baseURL = '/api/book'
  
  private invalidBaseURL = '/api/libarary'

  getAllBooks():Observable<Book[]>{
    return this._httpClient.get<Book[]>(this.baseURL)
  }

  getBookById(id:number):Observable<Book>{
    return this._httpClient.get<Book>(this.baseURL+'/'+id)
  }

  getAllLibBook():Observable<Book[]>{
    return this._httpClient.get<Book[]>(this.invalidBaseURL)
  }

  createBook(value:Book):Observable<HttpResponse<Book>>{
    let headers = new HttpHeaders()
    .set('Content-Tye', 'application/json')
    return this._httpClient.post<Book>(this.baseURL, value, {
    headers:headers,
    observe:'response'
    })
  }

  updateBook(value:Book):Observable<Book>{
    return this._httpClient.put<Book>(this.baseURL + '/' + value.id, value)

    // let headers = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // return this._httpClient.put<Book>(this.baseURL + '/' + value.id, value, {
    //   headers:headers,
    //   observe:'response'
    // })
  }

  deleteBook(id):Observable<any>{
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this._httpClient.delete<any>(this.baseURL + '/' + id,{
      headers:headers,
      observe:'response'
    })
  }


}
