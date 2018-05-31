import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var LVConnectSDK: any;

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor() {
    LVConnectSDK.handleLoginDone();
   }

  ngOnInit() {
  }

}
