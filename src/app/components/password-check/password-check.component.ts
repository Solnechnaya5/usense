import { Component } from '@angular/core';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.css']
})
export class PasswordCheckComponent {
  label:string = 'enter your password'
  password: string = '';
  passwordStrength: string = 'unchecked';

  checkPasswordStrength() {
    let digits = /^[0-9]+$/;
    let chatacters = /^[a-zA-Z]+$/;
let symbols = /^[@$!%*?&]/;

let digitsChatacters = /^[a-zA-Z0-9]+$/;
let symbolsChatacters = /^[a-zA-Z!@#$%^&*]+$/;
let digitsSymbols = /^[0-9!@#$%^&*]+$/;

    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'short';

    }else if(chatacters.test(this.password) || digits.test(this.password) || symbols.test(this.password) ){
      this.passwordStrength = 'easy';
    }else if (digitsChatacters.test(this.password)) {
      this.passwordStrength = 'medium';
    }else if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(this.password)) {
      this.passwordStrength = 'strong';
    } 
  }
}
