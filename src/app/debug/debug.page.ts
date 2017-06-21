import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import * as _ from 'lodash'

import { Table, Product, Item } from '../classes'

import { TableService } from '../table.service'
import { ProductService } from '../product.service'
import { LogService } from '../log.service'

@Component({
  selector: 'page-debug',
  templateUrl: 'debug.page.html'
})
export class DebugPage {

  private tables: Table[]
  private products: Product[]

  private view: number = 0 // 0 - overview, 1 - adding, 2 - billing
  private selectedTable: Table

  private displayItems: any
  private total: number
  private leftToPay: number

  constructor(
  	public navCtrl: NavController,
    private navParams: NavParams,
    private tableService: TableService,
    private productService: ProductService,
    private log: LogService
  ) {
    this.refresh()
  }

  private refresh(): void {
    this.tables = this.tableService.getTables()
    this.products = this.productService.getProducts()
    this.selectedTable = this.tables[0]

    this.displayItems = this.getDisplayItems(this.selectedTable.items)
    this.total = this.getTotal(this.displayItems)
    this.leftToPay = this.getLeftToPay(this.displayItems)
  }

  private addItemToTable(tableId: string, product: Product): void {
    this.tableService.addItemToTable(tableId, product)
    this.refresh()
  }

  private getDisplayItems(items: Item[]): any {
    const uniqItems = _.uniqBy(items, item => item.id)
    return _.map(uniqItems, (uniqItem: Item) => {
      const count = _.filter(items, (item: Item) => item.id === uniqItem.id).length
      const payedCount = _.filter(items, (item: Item) => (item.id === uniqItem.id && item.isPayed === true)).length
      return _.assign(uniqItem, { count, payedCount })
    })
  }

  private getTotal(items: any): number {
    return _.sum(_.map(items, item => item.count * item.price))
  }

  private getLeftToPay(items: any): number {
    return _.sum(_.map(items, item => (item.count - item.payedCount) * item.price))
  }

  private releaseTable(tableId: string): void {
    this.tableService.releaseTable(tableId)
    this.refresh()
  }

}
