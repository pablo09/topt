import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-theory',
  templateUrl: 'theory.component.html'
})
export class TheoryComponent implements OnInit {


  constructor(
    private router: Router){
  }

  ngOnInit(): void {
   
  }

}
