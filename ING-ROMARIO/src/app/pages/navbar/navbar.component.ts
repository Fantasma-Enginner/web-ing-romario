import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img1 = './assets/img/Romario.jpeg';
  img2 = './assets/img/github-icon.svg';
  img3 = './assets/img/facebook.svg';
  img4 = './assets/img/linkedin.svg';
  img5 = './assets/img/youtube.svg';
  img6 = './assets/img/official-gmail.svg';
  img7 = './assets/img/whatsapp.svg';


  constructor() { }

  ngOnInit(): void {
  }

}
