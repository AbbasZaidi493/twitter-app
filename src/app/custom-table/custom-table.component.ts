import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() data: any = [];
  p: number = 1;
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
