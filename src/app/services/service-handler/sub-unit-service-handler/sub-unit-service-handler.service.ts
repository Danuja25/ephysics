import { Injectable } from '@angular/core';
import {SubUnit} from '../../../modules/shared/models/sub-unit/sub-unit';

@Injectable({
  providedIn: 'root'
})
export class SubUnitServiceHandlerService {

  constructor() { }

  public getTestData(): Array<SubUnit>
  {
    let subUnits = new Array<SubUnit>();
    for (let i = 0; i < 10; i++) {
      const subUnit = new SubUnit();
      subUnit.id = i;
      subUnit.name = 'Sub Unit ' + i;
      subUnit.description = 'Practicals in physics';
      subUnit.unitNo = i;
      subUnit.image = 'assets/img/topic.jpg';
      subUnits.push(subUnit);
    }
    return subUnits;
  }
}
