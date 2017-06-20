import { Injectable } from '@angular/core'
import * as _ from 'lodash'

class Order {
	tableId: number
	productId: number
}

@Injectable()
export class OrderService {

	private orders: Order[] = []

  constructor() {}

  addOrder(tableId: number, productId: number): void {
  	this.orders.push({ tableId, productId })
  }

  getItemsOfTable(tableId: number): number[] {
  	return _.chain(this.orders)
  		.filter(order => order.tableId === tableId)
  		.map(order => order.productId)
  		.value()
  }

}
