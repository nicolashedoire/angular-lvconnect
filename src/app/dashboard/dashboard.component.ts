import { Component, OnInit } from '@angular/core';
import { SdkService } from '../services/sdk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any = null;

  constructor(private sdk: SdkService, private router: Router) {
    if (!this.sdk.isLogged()) {
      this.router.navigate(['']);
    }

    sdk.getUserProfile().then((result) => {
      console.log(result);
      this.user = result;
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit() {}

  logout() {
    this.sdk.logout();
    if (!this.sdk.isLogged()) {
      this.router.navigate(['']);
    }
  }
}
