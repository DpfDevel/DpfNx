import { Component } from '@angular/core';
import { Todo } from '@dpf-workspace/data';

@Component({
  selector: 'dpf-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todo: Todo;

  constructor() {
    this.todo = {
      title: 'Ala ma kota'
    }
  }
}
