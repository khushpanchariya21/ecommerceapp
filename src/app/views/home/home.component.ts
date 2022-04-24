import { Component, OnInit } from '@angular/core';
import { IProductDetail } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statusProduct = false
  products: Array<IProductDetail>;
  product!: Object;
  items: any
  show: boolean;
  showButton: boolean;
  cart: any[] = [];
  productItem: any[] = [];
  total: number
  base: number = 1;
  categories: any;
  constructor(private dataService: ProductService,private router: Router ) {
    this.cart = []
    this.products = []
    this.items = []
    this.show = false;
    this.showButton = false
    this.total = 0
   }

  ngOnInit(): void {
    this.showProducts();
    this.allCategories();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  showProducts() {
    this.dataService.getProducts().subscribe(
      (response: any) => {
        this.allProducts(response);
        this.filterType('electronics')
      }
    )
  }
  allProducts(product: IProductDetail[]) {
    this.products = product;
  }
  allCategories(){
    this.dataService.getCategories().subscribe(
      (response:any)=>{
        this.categories=response
      }
    )
  }
  filterType(categories: any) {
    this.dataService.getProductByCategory(categories).subscribe((data:IProductDetail)=>{this.items=data})
    this.items = this.products.filter((elem: IProductDetail) => {
      return elem.category === categories;
    })
  }
  showDetails(id:any){
    this.router.navigate(['/product-details', { id: id }]);
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
