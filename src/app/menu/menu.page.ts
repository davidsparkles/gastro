import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import { BillPage } from '../bill/bill.page'

import { Product } from '../product'
import { ProductService } from '../product.service'

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html'
})
export class MenuPage {

	private tableId: number = null
  private products: Product[]

  constructor(
  	public navCtrl: NavController,
    private navParams: NavParams,
    private productService: ProductService
  ) {
    this.tableId = this.navParams.get('id')
    this.products = this.productService.getProducts()
  }

  onBillClick(): void {
    this.navCtrl.push(BillPage, { id: this.tableId })
  }

  onOrderClick(productId): void {
    /*this.orderService.addOrder(this.tableId, productId)*/
  }

}
