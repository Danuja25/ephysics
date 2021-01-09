import { Injectable } from '@angular/core';
import {MainUnit} from '../../../modules/shared/models/main-unit/main-unit';

@Injectable({
  providedIn: 'root'
})
export class MainUnitServiceHandlerService {

  constructor() { }

  public getTestData(): Array<MainUnit>
  {
    let mainUnits = new Array<MainUnit>();
    for (let i = 0; i < 10; i++) {
      const mainUnit = new MainUnit();
      mainUnit.id = i;
      mainUnit.name = 'Unit ' + i;
      mainUnit.description = 'Unit in physics';
      mainUnit.unitNo = i;
      mainUnit.image = 'assets/img/topic.jpg';
      mainUnits.push(mainUnit);
    }
    return mainUnits;
  }
}
