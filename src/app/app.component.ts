import { Component, OnInit } from '@angular/core';
import { AuthService } from "./shared/services/auth/auth.service";
import { LoaderService } from "./shared/services/loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLog = false;
  isLoading = false;
  constructor(private authService: AuthService, private loaderService: LoaderService) {
    this.authService.authSubject.subscribe(loginState => {
      this.isLog = loginState;
    });
    this.loaderService.isLoading.subscribe(loaderState => {
      this.isLoading = loaderState;
    })
  }

  ngOnInit() {
    this.checkLog();
  }

  private checkLog() {
    if (localStorage.getItem('access_token')) {
      this.authService.authSubject.next(true);
    } else {
      this.authService.authSubject.next(false);
    }
  }
}
