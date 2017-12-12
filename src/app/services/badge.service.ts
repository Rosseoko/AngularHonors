import { Injectable } from '@angular/core';
import { Badge } from '../shared/badge';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BadgeService {

  constructor(private restangular: Restangular) { }

  getBadges(): Observable<Badge[]> {
    return this.restangular.all('badges').getList();
  }

}


