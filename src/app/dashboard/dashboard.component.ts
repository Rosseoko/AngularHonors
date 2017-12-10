import { Component, OnInit } from '@angular/core';

import { Streak } from '../shared/streak';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  dishes: Streak[] = [
    {
      name:'Uthappizza',
      image: '/assets/images/uthappizza.png',
      day: 'mains',
      },
   {
      name:'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      day: 'appetizer',
  } ];

  constructor() { }

  ngOnInit() {
  }

}
