import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { MenuPage } from './menu/menu.page'
import { BillPage } from './bill/bill.page'
import { RoomPage } from './room/room.page'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { TableService } from './table.service'
import { OrderService } from './order.service'
import { ProductService } from './product.service'

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    BillPage,
    RoomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    BillPage,
    RoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TableService,
    OrderService,
    ProductService
  ]
})
export class AppModule {}
