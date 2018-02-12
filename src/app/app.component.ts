import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {
      id: 100,
      title: 'Excepteur magna aliquip est non minim ipsum cillum id duis.',
    },
    {
      id: 101,
      title: 'Adipisicing proident in deserunt voluptate pariatur elit voluptate sunt elit.',
    },
    {
      id: 102,
      title: 'Do tempor enim ut ullamco dolor ipsum voluptate voluptate do nulla ut ex.',
    },
    {
      id: 103,
      title: 'Esse tempor qui id reprehenderit consectetur dolor consequat in magna.',
    },
    {
      id: 104,
      title: 'Anim et dolor id dolore magna eu.',
    },
    {
      id: 105,
      title: 'Voluptate tempor culpa id fugiat voluptate sunt laborum incididunt elit sunt consectetur et Lorem.',
    },
    {
      id: 106,
      title: 'Enim qui laborum veniam Lorem.',
    }
  ];
  onAdd() {
    this.courses.push({
      id: 111,
      title: 'Fugiat amet sint veniam dolor nulla cupidatat voluptate adipisicing.'
    });
  }
  onDelete(x) {
    const i = this.courses.indexOf(x);
    this.courses.splice(i, 1);
  }
  onUpdate(x) {
    const i = this.courses.indexOf(x);
    this.courses.splice(i, 1, {
      id: 999,
      title: 'Laborum enim nulla minim elit elit.'
    });
  }
}
