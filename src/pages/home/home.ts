import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Health } from '@ionic-native/health';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mobileInfo: string = "";

  constructor(public navCtrl: NavController, private health: Health) {
  }

  onViewDidLoad() {
    this.showHealthInfo();
  }

  showHealthInfo() {
    this.health.isAvailable()
      .then((available: boolean) => {
        console.log(available);
        this.health.requestAuthorization([
          'distance', 
          //'nutrition', 
          'activity', 'steps',  //read and write permissions
          // {
          //   read: ['steps'],       //read only permission
          //   write: ['height', 'weight']  //write only permission
          // }
        ])
          .then(res => console.log("tiburcio guay: " + res))
          .catch(e => console.log("tiburcio error: " + e));
      })
      .catch(e => console.log("tiburcio no disponible: " + e));
  }

  showSteps() {
    this.health.queryAggregated({
      "startDate": new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // three days ago
      endDate: new Date(), // now
      dataType: 'steps',
      bucket: 'day'
    }).then(data => {
      console.log(data);
      this.mobileInfo = JSON.stringify(data);
      console.log(this.mobileInfo);
    })
      .catch(e => {
        console.log(e);
      });
  }

  showActivity() {
    this.health.queryAggregated({
      "startDate": new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // three days ago
      endDate: new Date(), // now
      dataType: 'activity',
      bucket: 'day'
    }).then(data => {
      console.log(data);
      this.mobileInfo = JSON.stringify(data);
      console.log(this.mobileInfo);
    })
      .catch(e => {
        console.log(e);
      });
  }

}
