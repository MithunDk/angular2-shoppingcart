import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }
url = '../../assets/phones/logo.png';
onSubmit(form){
console.log(form.form.value);

if(form.form.value.username=='mithun' && form.form.value.password=='123'){
this.router.navigate(['/products']);

}
else{
	alert('Wrong inputs');
}
}

ngOnInit() {
  }

}
