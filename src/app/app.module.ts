import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { DebugPage } from './debug/debug.page'
//import { MenuPage } from './menu/menu.page'
//import { BillPage } from './bill/bill.page'
//import { RoomPage } from './room/room.page'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { TableService } from './table.service'
import { OrderService } from './order.service'
import { ProductService } from './product.service'
import { LogService } from './log.service'

@NgModule({
  declarations: [
    MyApp,
    DebugPage,
    //MenuPage,
    //BillPage,
    //RoomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DebugPage,
    //MenuPage,
    //BillPage,
    //RoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TableService,
    OrderService,
    ProductService,
    LogService
  ]
})
export class AppModule {}
