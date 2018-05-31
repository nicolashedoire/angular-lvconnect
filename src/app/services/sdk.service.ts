import { Injectable } from '@angular/core';

declare var LVConnectSDK: any;

@Injectable()
export class SdkService {

  sdk: any;
  constructor() {

    this.sdk = new LVConnectSDK({
      mode: 'private',
      appId: '50f70460-da03-4b1f-8d34-a8024d4f194b',
      appSecret: '78fe7e7047bf3574920cf4c3676bd8ca66e7ef54',
      redirectUri: 'http://localhost:4200/callback'
    });
  }

  isLogged() {
    return this.sdk.isLoggedIn();
  }

  login() {
    return this.sdk.login();
  }

  logout() {
    this.sdk.logout();
  }

  getUserProfile() {
    return this.sdk.getUserProfile();
  }
}
