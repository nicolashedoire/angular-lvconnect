import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SdkService } from '../services/sdk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private sdk: SdkService) {
    if (this.sdk.isLogged()) {
      router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
  }

  login() {
    this.sdk.login().then((result) => {
      console.log(result);
      this.router.navigate(['dashboard']);
    }).catch((err) => {
      console.log(err);
    });
  }
}
