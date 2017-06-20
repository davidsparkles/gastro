import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Item } from './item'
import { Product } from './product'
import { PRODUCTS } from './products.mock'

@Injectable()
export class ProductService {

	private products: Product[] = null

  constructor() {
	  this.products = this.loadProducts()
  }

  public getProducts(): Product[] {
  	return this.products
  }

  public getProduct(id: string): Product {
  	return _.find(this.products, product => product.id === id)
  }

  public checkProductId(id: string): boolean {
    return !!_.find(this.products, (product: Product) => product.id === id)
  }

  public getPrice(items: Item[]): number {
    const price = _.chain(items)
      .map((item: Item) => {
        const product = this.getProduct(item.productId)
        return product.price
      })
      .sum()
      .value()
    return price
  }

  private loadProducts(): Product[] {
	  return PRODUCTS
  }

}