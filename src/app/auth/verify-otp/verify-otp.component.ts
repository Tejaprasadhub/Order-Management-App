import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  standalone: false,
  
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ marginLeft: '-100%' }),animate('300ms', style({ marginLeft: '0px' }))
      ])
    ])
  ]
})
export class VerifyOtpComponent {
  error: string | undefined;
  verifyOTPForm!: FormGroup;
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
    if (this.verifyOTPForm.valid) {
      // this.authService.login(this.verifyOTPForm.value)
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
      Object.keys(this.verifyOTPForm.controls).forEach(field => {
        const control = this.verifyOTPForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  private createForm() {
    this.verifyOTPForm = this.formBuilder.group({
      phonenumber: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }]
    });
  }

  resetPassword(){
    this.router.navigate(['/reset-password'], { relativeTo: this.route });
  }

  verifyOtp(){
    this.router.navigate(['/change-password'], { relativeTo: this.route });
  }

  
}
