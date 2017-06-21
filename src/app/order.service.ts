import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import * as Promise from 'bluebird'

import { TableService } from './table.service'
import { ProductService } from './product.service'
import { LogService } from './log.service'

import { Order } from './order'
import { Item } from './item'

@Injectable()
export class OrderService {

	private orders: Order[] = []

  constructor(
    private tableService: TableService,
    private productService: ProductService,
    private log: LogService
  ) {
    this.loadOrders()
      .then(orders => this.orders = orders)
  }

  public getOrders(): Order[] {
    return this.orders
  }

  public addItemToOrder(tableId: string, productId: string): void {
    if (!this.tableService.checkTableId(tableId) || !this.productService.checkProductId(productId)) {
      this.log.error(`add item to order - tableId is invalid`)
      return
    }

    const order = this.getCurrentOrder(tableId)
    const item: Item = { productId }
    order.items.push(item)
    this.log.info(`added ${productId} to the order of ${tableId}`)
  }

  public getItemsOfOrder(tableId: string): Item[] {
    if (!this.tableService.checkTableId(tableId)) {
      this.log.error(`get items of order - tableId is invalid`)
      return []
    }

    const order = this.getCurrentOrder(tableId)
  	return order.items
  }

  public releaseOrder(tableId: string): void {
    if (!this.tableService.checkTableId(tableId)) {
      this.log.error(`release order - tableId is invalid`)
      return
    }

    const removedOrders = _.remove(this.orders, order => order.tableId === tableId)
    if (removedOrders.length === 1) {
      this.log.info(`released following orders ${removedOrders}`)
    } else if (removedOrders.length === 0) {
      this.log.error(`no order found for release`)
    } else {
      this.log.error(`released following (more than one) orders ${removedOrders}`)
    }
  }

  private getCurrentOrder(tableId: string): Order {
    if (!this.tableService.checkTableId(tableId)) {
      this.log.error(`get current order - tableId is invalid`)
      return null
    }

    const order = _.find(this.orders, order => order.tableId === tableId)
    if (order) return order
    const id = this.orders.length.toString()
    const newOrder: Order = { id, tableId, items: [] }
    this.orders.push(newOrder)
    return newOrder
  }

  private loadOrders(): Promise<Order[]> {
    return Promise.resolve([])
  }

}
