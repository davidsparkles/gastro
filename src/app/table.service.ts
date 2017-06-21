import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Table, Item, Product } from './classes'
import { TABLES } from './tables.mock'

@Injectable()
export class TableService {

  private tables: Table[] = []

  constructor() {
    this.tables = this.laodTables()
  }

  public addItemToTable(tableId: string, product: Product): void {
    const item: Item = _.assign({ isPayed: false }, product)
    const table = this.getTable(tableId)
    table.items.push(item)
  }

  public setItemsPayed(items: Item[]): void {
    _.each(items, (item: Item) => item.isPayed = true)
  }

  public releaseTable(tableId: string): void {
    const table = this.getTable(tableId)
    const unpayedItems = _.find(table.items, (item: Item) => item.isPayed === false)
    if (unpayedItems === undefined) {
      table.items = []
    }
  }

  public getTable(tableId: string): Table {
    return _.find(this.tables, table => table.id === tableId)
  }

  public checkTableId(id: string): boolean {
    const table = _.find(this.tables, (table: Table) => table.id === id.toString())
    if (table === undefined) return false
    return true
  }

  public getTables(): Table[] {
  	return this.tables
  }

  private laodTables(): Table[] {
    return TABLES
  } 

}
