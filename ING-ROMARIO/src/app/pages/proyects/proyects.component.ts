import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  img1 = './assets/img/Romario.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
