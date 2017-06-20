import { Injectable } from '@angular/core';

import { Table } from './table'
import { TABLES } from './tables.mock'

@Injectable()
export class TableService {

  constructor() {}

  getTables(): Table[] {
  	return TABLES
  }

}
