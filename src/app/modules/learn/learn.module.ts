import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LearnRoutingModule, routes} from './learn-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { TheoryMainUnitsComponent } from './theory-main-units/theory-main-units.component';
import { PracticalMainUnitsComponent } from './practical-main-units/practical-main-units.component';
import {SharedModule} from '../shared/shared.module';
import { CalculatorsComponent } from './calculators/calculators.component';
import { SubUnitsComponent } from './sub-units/sub-units.component';
import { ContentComponent } from './content/content.component';
import {AngularSplitModule} from 'angular-split';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuizContentComponent } from './quiz-content/quiz-content.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent, TheoryMainUnitsComponent, PracticalMainUnitsComponent, CalculatorsComponent, SubUnitsComponent, ContentComponent, QuizContentComponent],
    imports: [
        CommonModule,
        LearnRoutingModule,
        NgbModule,
        AngularSplitModule,
        YouTubePlayerModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatCardModule,
        FlexLayoutModule,
      BrowserAnimationsModule
    ],
  exports: [HomeComponent]
})
export class LearnModule { }
