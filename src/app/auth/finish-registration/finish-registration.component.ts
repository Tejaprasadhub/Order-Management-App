import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-finish-registration',
  standalone: false,
  
  templateUrl: './finish-registration.component.html',
  styleUrl: './finish-registration.component.scss',  
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ bottom: '-100%' }),animate('300ms', style({ bottom: '0px' }))
      ]),
      transition(':leave', [
        style({ bottom: '0' }),animate('300ms', style({ bottom: '-100%' }))
      ])
    ])
  ]
})
export class FinishRegistrationComponent {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  ingredient!:string;

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
      firstName: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      lastName: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      email: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      gender: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      shopName: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      gst: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
      pan: ['', { validators: [Validators.required,Validators.pattern('^[0-9]{10}$')] }],
    });
  }

  resetPassword(){
    this.router.navigate(['/reset-password'], { relativeTo: this.route });
  }

  createAccount(){
    this.router.navigate(['/create-account'], { relativeTo: this.route });

  }

}
