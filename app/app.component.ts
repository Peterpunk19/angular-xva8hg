import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  items = [{name: "jean", lastname:"2", surname: "kruger"}, {name: "bobby",lastname:"sss2", surname: "marais"}]
}
