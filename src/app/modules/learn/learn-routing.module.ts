import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TheoryMainUnitsComponent} from './theory-main-units/theory-main-units.component';
import {PracticalMainUnitsComponent} from './practical-main-units/practical-main-units.component';
import {CalculatorsComponent} from './calculators/calculators.component';
import {SubUnitsComponent} from './sub-units/sub-units.component';
import {ContentComponent} from './content/content.component';
import {QuizContentComponent} from './quiz-content/quiz-content.component';

export const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'theory_main',
    component: TheoryMainUnitsComponent
  },
  {
    path: 'practical_main',
    component: PracticalMainUnitsComponent
  },
  {
    path: 'calculators',
    component: CalculatorsComponent
  },
  {
    path: 'subUnits',
    component: SubUnitsComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'quiz_content',
    component: QuizContentComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule {

}
