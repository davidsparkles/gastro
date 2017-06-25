import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { BillPage } from './bill/bill.page'
import { OverviewPage } from './overview/overview.page'
import { AddItemPage } from './additem/additem.page'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { TableService } from './table.service'
import { ProductService } from './product.service'
import { LogService } from './log.service'

@NgModule({
  declarations: [
    MyApp,
    BillPage,
    OverviewPage,
    AddItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BillPage,
    OverviewPage,
    AddItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TableService,
    ProductService,
    LogService
  ]
})
export class AppModule {}
