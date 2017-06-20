import { Component, OnInit } from '@angular/core'
import { NavController } from 'ionic-angular'
import * as _ from 'lodash'

import { Table } from '../table'
import { TableService } from '../table.service'
import { MenuPage } from '../menu/menu.page'


@Component({
  selector: 'page-room',
  templateUrl: 'room.page.html'
})
export class RoomPage implements OnInit {

  private tables: Table[]

  constructor(
    public navCtrl: NavController,
    private tableService: TableService
  ) {

  }

  ngOnInit() {
    this.tables = this.tableService.getTables()
  }

  onTableClick(id: number): void {
    this.navCtrl.push(MenuPage, { id })
  }

}
