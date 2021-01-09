import { Component, OnInit } from '@angular/core';
import {MainUnit} from '../../shared/models/main-unit/main-unit';
import {MainUnitServiceHandlerService} from '../../../services/service-handler/main-unit-service-handler/main-unit-service-handler.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-theory-main-units',
  templateUrl: './theory-main-units.component.html',
  styleUrls: ['./theory-main-units.component.css']
})
export class TheoryMainUnitsComponent implements OnInit {

  mainUnits: Array<MainUnit>;

  constructor(private mainUnitServiceHandlerService: MainUnitServiceHandlerService,
              private router: Router) { }

  ngOnInit(): void {
    this.mainUnits = this.mainUnitServiceHandlerService.getTestData();
  }

  goToContentView() {
    this.router.navigate(['subUnits']);
  }

}
