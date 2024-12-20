import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;


  displayPolicies: boolean = false;
  displayCookies: boolean = false;
  displayHelps:boolean=false;

  // private ngUnsubscribe = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    // if (this.tokenService.hasToken()){
    //   this.router.navigateByUrl('/home');
    // }
  }

  login() {   
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value)
      //   .pipe(takeUntil(this.ngUnsubscribe)).subscribe((result: any) => {
      //     if (result.token) {
      //       this.router.navigate(['/home'], { relativeTo: this.route });
      //     }
      //     else{
      //       this.router.navigate(['/login'], {relativeTo: this.route})
      //     }
      //   })
    }
    else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      phonenumber: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      password: ['', Validators.required]
    });
  }

  resetPassword(){
    this.router.navigate(['/reset-password'], { relativeTo: this.route });
  }

}
