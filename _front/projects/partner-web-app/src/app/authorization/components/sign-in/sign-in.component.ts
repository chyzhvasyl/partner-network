import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {PatternsConstants} from "../../../../../../commons/src/lib/constants/patterns.constants";
import {Router} from "@angular/router";
import {CoreLinks} from "../../../app-routing.module";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm:          FormGroup;
  public loginFormControl:    FormControl;
  public passwordFormControl: FormControl;

  public showPass: boolean;
  public coreLinks = CoreLinks;

  constructor(
    private _authService: AuthorizationService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._createFormControls();
    this._createForm();
  }

  private _createFormControls(): void {
    this.loginFormControl    = new FormControl('', [Validators.required, Validators.pattern(PatternsConstants.EMAIL)]);
    this.passwordFormControl = new FormControl('', Validators.required);
  }

  private _createForm(): void {
    this.signInForm = new FormGroup({
      login:    this.loginFormControl,
      password: this.passwordFormControl
    });
  }

  public changePassView() {
    this.showPass = !this.showPass;
  }

  public onLogin(): void {
    console.log('this.signInForm', this.signInForm.value);
    this._router.navigate([this.coreLinks.partner_network])
  }
}
