import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { Router} from '@angular/router';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

<<<<<<< HEAD
  constructor( public location: Location, public route: Router ) { }

goBack(){
  this.route.navigate(['/products']);
=======
  constructor( public location: Location) { }

goBack(){
  this.location.back();
>>>>>>> origin/master
}

  ngOnInit() {
  }

}
