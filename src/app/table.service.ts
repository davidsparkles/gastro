import { Injectable } from '@angular/core'
import * as _ from 'lodash'

import { Table } from './table'
import { TABLES } from './tables.mock'

@Injectable()
export class TableService {

  private tables: Table[] = []

  constructor() {
    this.tables = this.laodTables()
  }

  public getTables(): Table[] {
  	return this.tables
  }

  public checkTableId(id: string): boolean {
    return !!_.find(this.tables, (table: Table) => table.id === id.toString())
  }

  private laodTables(): Table[] {
  	return TABLES
  } 

}
