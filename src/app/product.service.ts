import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Product } from './product'
import { PRODUCTS } from './products.mock'

@Injectable()
export class ProductService {

	private products: Product[] = null

  constructor() {}

  getProducts(): Product[] {
  	if (!this.products) {
  		this.products = PRODUCTS
  	}
  	return this.products
  }

  getProduct(productId: number): Product {
  	return _.find(this.products, ({ id }) => id === productId)
  }

}