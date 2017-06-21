import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Item } from './item'
import { Product } from './product'
import { PRODUCTS } from './products.mock'

@Injectable()
export class ProductService {

	private products: Product[] = []

  constructor() {
	  this.products = this.loadProducts()
  }

  public checkProductId(id: string): boolean {
    const product = _.find(this.products, (product: Product) => product.id === id)
    if (product === undefined) return false
    return true
  }

  public getProducts(): Product[] {
  	return this.products
  }

  public getProduct(id: string): Product {
  	return _.find(this.products, product => product.id === id)
  }

  private loadProducts(): Product[] {
	  return PRODUCTS
  }

}