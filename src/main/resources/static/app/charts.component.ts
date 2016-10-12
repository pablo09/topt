import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-charts',
  templateUrl: 'charts.component.html'
})
export class ChartsComponent implements OnInit {


  constructor(
    private router: Router){
  }

  ngOnInit(): void {
   
  }

}
