import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
// import * as _ from 'lodash'

import { TableService } from '../table.service'
import { Table } from '../classes'

@Component({
  selector: 'page-bill',
  templateUrl: 'bill.page.html'
})
export class BillPage {

  private selectedTable: Table

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private tableService: TableService
  ) { }

  ionViewWillEnter() {
    this.selectedTable = this.navParams.get('selectedTable')  
  }

  private releaseTable(): void {
    //TODO
    this.tableService.setItemsPayed(this.selectedTable.items)
    //
    this.tableService.releaseTable(this.selectedTable.id)
    this.navCtrl.pop()
  }

}
