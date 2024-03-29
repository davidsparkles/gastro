import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import * as _ from 'lodash'

import { OverviewPage } from './overview/overview.page'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OverviewPage

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    this.init = this.init.bind(this)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()
      this.init()
    });
  }

  private init(): void {
    console.log('debug me here')
  }
}
