import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { IProductDetail } from 'src/app/models/product';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProductDetail | undefined;
  public count: number = 0;
  
  constructor(
  private route: ActivatedRoute,
  private data:ProductService,
  private location: Location,
  private spinner: NgxSpinnerService

  ) { }
 
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spinner.show();
    this.data.getProductsById(id)
      .subscribe(res => {this.spinner.hide();this.product = res});
  }
  goBack(): void {
    this.location.back();
  }
  sendNumber() {
    this.data.sendNumber(this.increament());
  }
  increament() {
    this.count += 1;
    console.log("done");
    return this.count;
  }
  
}
