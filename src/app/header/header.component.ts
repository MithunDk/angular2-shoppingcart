import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
title = 'Welcome to Shopping Portal!';
url = '../../assets/phones/logo.png';
  ngOnInit() {
  }

}
