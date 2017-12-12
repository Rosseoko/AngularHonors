import { Component, OnInit } from '@angular/core';

import { Badge } from '../shared/badge';
import { Routine } from '../shared/routine';

import { BadgeService } from '../services/badge.service';
import { RoutineService } from '../services/routine.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  badges: Badge[];
  routines: Routine[];

  constructor(private badgeService: BadgeService, private routineService: RoutineService) { }

  ngOnInit() {

    this.badgeService.getBadges().subscribe(badges => this.badges = badges);
    this.routineService.getRoutines().subscribe(routines => this.routines = routines);

  }


}
