import { Component } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {

  loginActive = true

  setLoginActive(loginActive) {
    this.loginActive = loginActive
  }

}
