import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['baluisto96@gmail.com', [Validators.required, Validators.email]],
    password: ['lawliet96', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router, private authServive: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    // this.authServive.validarToken().subscribe(resp=>{
    //   console.log(resp);
    // });
    console.log(this.miFormulario.value)
    const { email, password } = this.miFormulario.value;
    this.authServive.login(email, password).subscribe(ok => {
      // console.log(valido);
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
       Swal.fire('Error',ok,'error');
      }
    });
  }
}
