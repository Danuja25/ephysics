import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';



@NgModule({
  declarations: [HeaderNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderNavigationComponent]
})
export class SharedModule { }
