import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import * as _ from 'lodash'

import { TableService } from '../table.service'
import { Table, Item } from '../classes'
import { AddItemPage } from '../additem/additem.page'
import { BillPage } from '../bill/bill.page'

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.page.html'
})
export class OverviewPage {

  private selectedTable: Table
  private displayItems: any
  private total: number
  private leftToPay: number

  constructor(
    public navCtrl: NavController,
    private tableService: TableService
  ) {

  }

  ionViewWillEnter() {
    console.log("I'm alive!")
    this.selectedTable = this.tableService.getTable('1')
    this.displayItems = this.getDisplayItems(this.selectedTable.items)
    this.total = this.getTotal()
    this.leftToPay = this.getLeftToPay()
  }

  private getDisplayItems(items: Item[]): any {
    const uniqItems = _.uniqBy(items, item => item.id)
    return _.map(uniqItems, (uniqItem: Item) => {
      const count = _.filter(items, (item: Item) => item.id === uniqItem.id).length
      const payedCount = _.filter(items, (item: Item) => (item.id === uniqItem.id && item.isPayed === true)).length
      return _.assign(uniqItem, { count, payedCount })
    })
  }

  private getTotal(): number {
    return _.sumBy(this.selectedTable.items, 'price')
  }

  private getLeftToPay(): number {
    return _.chain(this.selectedTable.items).reject((item: Item) => item.isPayed).sumBy('price').value()
  }

  private onAddItems(): void {
    this.navCtrl.push(AddItemPage, { selectedTable: this.selectedTable })
  }

  private onBill(): void {
    this.navCtrl.push(BillPage, { selectedTable: this.selectedTable })
  }

}
