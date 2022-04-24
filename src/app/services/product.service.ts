import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap ,filter } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { IProductDetail, IProductModel } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private domain: string;
  private endpoint: string;
   product!:Observable<any>
   private subject = new Subject<any>();
    
   
  constructor(private httpClient: HttpClient) {
    this.domain = environment.domain;
    this.endpoint = '/products';
  
  }
  
  getCategories(){
    return this.httpClient.get(`${this.domain}${this.endpoint}/categories`);
  }
   getProducts() {
    return this.httpClient.get<IProductDetail[]>(`${this.domain}${this.endpoint}`)
      .pipe(
        tap(_ => this.log('fetched Products')),
        
        catchError(this.handleError<IProductDetail[]>('getProducts', [])),
        
      
        );
  }
 
  getProductsById(id:any){
    return this.httpClient.get(`${this.domain}${this.endpoint}/${id}`);
  }
  getProjectByName(name: String) {
    return this.product

  }
  
  getProductByCategory(category:string){
    return this.httpClient.get(`${this.domain}${this.endpoint}/category/${category}`);
  }
  searchProducts(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty product  array.
      return of([]);
    }
    return this.httpClient.get<any[]>(`${this.domain}/?title=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found Products matching "${term}"`) :
         this.log(`no Products matching "${term}"`)),
      catchError(this.handleError<any[]>('searchProducts', []))
    );
  }
  sendNumber(number:number){
    this.subject.next({text:number});
  }

  getNumber():Observable<any>{
    return this.subject.asObservable();
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a product Service message with the MessageService */
  private log(message: string) {
   console.log(`ProductService: ${message}`);
  }
}
