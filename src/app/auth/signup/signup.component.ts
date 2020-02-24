import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private authServivce: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async signup(formData: any): Promise<void> {
    try {
      const user = this.authServivce.createUser( formData.email, formData.password );
      console.log(user);
      
      this.router.navigate(['/admin']);
    } catch (error) {
      
    }
  }
}
