import { Injectable } from '@angular/core';
import {PracticalUnit} from '../../../modules/shared/models/practical-unit/practical-unit';

@Injectable({
  providedIn: 'root'
})
export class PracticalUnitServiceHandlerService {

  constructor() { }

  public getTestData(): Array<PracticalUnit>
  {
    let practicalUnits = new Array<PracticalUnit>();
    for (let i = 0; i < 10; i++) {
      const practicalUnit = new PracticalUnit();
      practicalUnit.id = i;
      practicalUnit.name = 'Practical Unit ' + i;
      practicalUnit.description = 'Practicals in physics';
      practicalUnit.unitNo = i;
      practicalUnit.image = 'assets/images/big/emag.jpg';
      practicalUnits.push(practicalUnit);
    }
    return practicalUnits;
  }
}
