import { Component, Input } from '@angular/core';

/**
 * Custom table component
*/
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {
  @Input() data: any = [];
  currentPage: number = 1;
  objectKeys = Object.keys;
}
