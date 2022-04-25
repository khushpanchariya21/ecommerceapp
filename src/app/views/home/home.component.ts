import { Component, OnInit } from '@angular/core';
import { IProductDetail } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  items: any
  categories: any;
  constructor(
    private dataService: ProductService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) {
   
    this.items = []
    
   }

  ngOnInit(): void {
    this.allCategories();
 
    
    
    
  }
 
  
  allCategories(){
    this.spinner.show();
    this.dataService.getCategories().subscribe(
      (response:any)=>{
        
        this.categories=response
        this.filterType(response[0]);
        this.spinner.hide();
        
      }
    )
  }
  filterType(categories: any) {
    this.spinner.show();
    this.dataService.getProductByCategory(categories).subscribe((data:IProductDetail)=>{this.items=data;this.spinner.hide()})
   
  }
  showDetails(id:any){
    this.router.navigate(['/product-details', { id: id }]);
  }
  
}
