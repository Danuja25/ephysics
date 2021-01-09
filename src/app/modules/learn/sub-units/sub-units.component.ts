import { Component, OnInit } from '@angular/core';
import {MainUnit} from '../../shared/models/main-unit/main-unit';
import {MainUnitServiceHandlerService} from '../../../services/service-handler/main-unit-service-handler/main-unit-service-handler.service';
import {Router} from '@angular/router';
import {SubUnit} from '../../shared/models/sub-unit/sub-unit';
import {SubUnitServiceHandlerService} from '../../../services/service-handler/sub-unit-service-handler/sub-unit-service-handler.service';

@Component({
  selector: 'app-sub-units',
  templateUrl: './sub-units.component.html',
  styleUrls: ['./sub-units.component.css']
})
export class SubUnitsComponent implements OnInit {

  subUnits: Array<SubUnit>;

  constructor(private subUnitServiceHandlerService: SubUnitServiceHandlerService,
              private router: Router) { }

  ngOnInit(): void {
    this.subUnits = this.subUnitServiceHandlerService.getTestData();
  }

  goToContentView() {
    this.router.navigate(['content']);
  }

}
