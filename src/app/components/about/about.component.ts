import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {


  constructor( public location: Location, public route: Router ) { }

goBack(){
  this.route.navigate(['/products']);
}
}