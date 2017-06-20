import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import * as _ from 'lodash'

import { OrderService } from '../order.service'
import { ProductService } from '../product.service'

@Component({
  selector: 'page-bill',
  templateUrl: 'bill.page.html'
})
export class BillPage {

  private tableId: number = null
	private items: any[]
  private total: number

  constructor(
  	public navCtrl: NavController,
    private navParams: NavParams,
    private orderService: OrderService,
    private productService: ProductService
  ) {/*
    this.tableId = this.navParams.get('id')
  	this.items = _.chain(this.orderService.getItemsOfTable(this.tableId))
      .countBy()
      .map((count, productId) => {
        const product = this.productService.getProduct(parseInt(productId))
        console.log(_.assign(product, { count }))
        return _.assign(product, { count })
      })
      .value()
    this.total = _.chain(this.items)
      .map(({ price, count }) => price * count)
      .sum()
      .value()
  */}

}
