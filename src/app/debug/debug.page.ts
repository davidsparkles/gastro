import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import * as _ from 'lodash'

import { Table } from '../table'
import { Product } from '../product'
import { Order } from '../order'

import { TableService } from '../table.service'
import { OrderService } from '../order.service'
import { ProductService } from '../product.service'
import { LogService } from '../log.service'

@Component({
  selector: 'page-debug',
  templateUrl: 'debug.page.html'
})
export class DebugPage {

  private tables: Table[]
  private products: Product[]
  private orders: Order[]

  constructor(
  	public navCtrl: NavController,
    private navParams: NavParams,
    private tableService: TableService,
    private orderService: OrderService,
    private productService: ProductService,
    private log: LogService
  ) {
    this.refresh()
  }

  private refresh(): void {
    this.tables = this.tableService.getTables()
    this.products = this.productService.getProducts()
    this.orders = this.orderService.getOrders()
  }

  private addItemToOrder(tableId, productId): void {
    this.orderService.addItemToOrder(tableId, productId)
    this.refresh()
  }

  private releaseOrder(tableId): void {
    this.orderService.releaseOrder(tableId)
    this.refresh()
  }

}
