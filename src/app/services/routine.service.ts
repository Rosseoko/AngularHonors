import { Injectable } from '@angular/core';
import { Routine } from '../shared/routine';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoutineService {

  constructor(private restangular: Restangular) { }


  getRoutines(): Observable<Routine[]> {
    return this.restangular.all('routines').getList();
  }

}
















