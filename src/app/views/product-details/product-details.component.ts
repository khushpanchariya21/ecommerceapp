import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { IProductDetail } from 'src/app/models/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProductDetail | undefined;
  cart: any[] = [];
  constructor(
  private route: ActivatedRoute,
  private data:ProductService,
  private location: Location) { }
  public count: number = 0;
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.data.getProductsById(id)
      .subscribe(res => this.product = res);
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
  addProduct(item: any) {
    let productExist = this.cart.find(cart => item.id === cart.id)
    if(productExist === undefined){
    this.cart.push({
        id: item.id,
        products: {
          productId: item.productId,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: 1
        }
      })
      console.log(this.cart)
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
