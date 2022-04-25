import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { IProductDetail } from 'src/app/models/product';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  number: any;
  subscription: Subscription;
  products: any
  

  constructor(private dataService: ProductService,private router:Router) { 
    this.subscription = this.dataService.getNumber().subscribe(number => { this.number = number });
  }
  keyword = 'title';
  data! :IProductDetail[]
  ngOnInit(): void {
  this.getAllData();
    
 
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  getAllData(){
    this.dataService.getProducts().subscribe(data=>{
      this.data=data
    })
  }
  selectEvent(item:any) {
    // do something with selected item
    console.log(item.id)
    this.router.navigate(['/product-details',item.id])
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }
}
