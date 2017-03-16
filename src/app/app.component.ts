import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
  styleUrls: ['app.scss'],
})
export class AppComponent  {
  APP_NAME: String;

  constructor() { }

  ngOnInit() {
    this.APP_NAME = 'TODO APP';
  }
}
