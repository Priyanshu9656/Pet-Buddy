import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  responsedata: any;
  errorMessage: string | null = null; // Add property to hold error messages


  onSubmit() {
    if (this.loginForm.valid) {
      this.service.ProceedLogin(this.loginForm.value).subscribe(
        result => {
          if (result != null) {
            this.responsedata = result;
            console.log(this.responsedata);
            localStorage.setItem('token', this.responsedata.accessToken);
            this.route.navigate(['/addPet']);
          }
        },
        error => {




          this.errorMessage = "Please enter correct details"; 
          console.error("Login error", error);

          
        }
      );
    }
  }

  constructor(private service: AuthServiceService, private route: Router) {
    localStorage.clear();
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
}
