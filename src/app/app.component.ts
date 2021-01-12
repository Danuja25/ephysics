import { Component } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ePhysics-New';

  ngOnInit(): void {
    get('https://cdn.omnicalculator.com/sdk.js', () => {

    });
  }
}
