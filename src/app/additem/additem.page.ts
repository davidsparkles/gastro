import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import * as _ from 'lodash'

import { ProductService } from '../product.service'
import { TableService } from '../table.service'
import { Table, Product, Item } from '../classes'

@Component({
  selector: 'page-additem',
  templateUrl: 'additem.page.html'
})
export class AddItemPage {

  private products: Product[]
  private selectedTable: Table
  private total: number

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private productService: ProductService,
    private tableService: TableService
  ) { }

  ionViewWillEnter() {
    console.log('Hello on add items')
    this.selectedTable = this.navParams.get('selectedTable')
    this.products = this.productService.getProducts()
    this.total = this.getTotal()
  }

  private addItemToTable(product: Product): void {
    this.tableService.addItemToTable(this.selectedTable, product)
    this.total = this.getTotal()
  }

  private getTotal(): number {
    return _.sumBy(this.selectedTable.items, 'price')
  }

}