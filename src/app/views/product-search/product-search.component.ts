import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, filter, map, switchMap
 } from 'rxjs/operators';
import { IProductDetail } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  heroes$!: Observable<any>;
  private searchTerms = new Subject<string>();
  
  
  observProduct!: Observable<any> ;
  constructor(private data: ProductService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    
    
   
     this.heroes$=this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>this.filterdata(term) ),
      
      
    );
    
  }
  obData(data:any){
    this.observProduct=data
    
  }
  filterdata(data:any):Observable<any>{
    console.log(data)
    console.log(this.observProduct)
    this.observProduct.subscribe(data=>{data.filter((x:any)=>{x.titile===data})})
    return this.observProduct
  }
  filter(term:string):any{
    this.heroes$= of(term)
  }
 
  
}
