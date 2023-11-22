import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isLog = false;

  constructor(private authService: AuthService) {
  }

  logOut() {
    this.authService.logOut();
  }
}
