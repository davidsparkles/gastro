import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Table } from './table'
import { TABLES } from './tables.mock'

@Injectable()
export class TableService {

  private tables: Table[] = []

  constructor() {
    this.laodTables()
      .then(tables => this.tables = tables)
  }

  public getTables(): Table[] {
  	return this.tables
  }

  public checkTableId(id: string): boolean {
    return !!_.find(this.tables, (table: Table) => table.id === id.toString())
  }

  private laodTables(): Promise<Table[]> {
    return Promise.resolve(TABLES)
  } 

}
