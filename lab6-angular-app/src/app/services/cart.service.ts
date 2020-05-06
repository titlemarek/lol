import { Injectable } from '@angular/core';
import { productsType } from '../services/products.model'
import { ProductsService } from '../services/products.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cont: number = 0;
  sumPrice: number = 0;
  cart: productsType = [];
  constructor(private productsService: ProductsService) { }

  add(p_id: number) {
    console.log('Add product id: ' + p_id + ' to cart');
    this.cart.push(this.productsService.getSomeProduct(p_id));
    this.sumPrice += this.productsService.getSomeProduct(p_id).p_price
    this.cont = this.cart.length;

  }
  getCounter() {
    return this.cont;
  }
  getsumPrice() {
    return this.sumPrice;

  }
  getCart() {
    return this.cart;
  }
}
