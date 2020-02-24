import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Alert } from '@app/shared/alert/alert.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  alertData: Alert;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.alertData = {
      present : false,
      icon    : '',
      message : '',
      cssClass: '',
      type    : ''
    }
  }

  async login( formData: any ): Promise<void> {
    try {
      const user = await this.authService.login( formData.email, formData.password );
      console.log(user.user);
      
      this.router.navigate(['/admin']);
    } catch (error) {
      this.alertData.cssClass = 'error';
      this.alertData.icon     = 'fa-times-circle';
      this.alertData.type     = 'Error';
      this.alertData.message  = error.message;
      this.alertData.present  = true;
    } finally {
      setTimeout(() => {
        this.alertData.present = false;
      }, 3000);
    }
  }

}
