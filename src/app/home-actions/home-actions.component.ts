import { Component, OnInit } from '@angular/core';

export interface Action {
  pColor: string;
  sColor: string;
  cols: number;
  rows: number;
  action: string;
}

@Component({
  selector: 'app-home-actions',
  templateUrl: './home-actions.component.html',
  styleUrls: ['./home-actions.component.css']
})
export class HomeActionsComponent implements OnInit {

  constructor() { }

  actions: Action[] = [
    {action: 'lightbulb', cols: 2, rows: 1, sColor: '#FCF3CF', pColor: '#F4D03F' },
    {action: 'subscriptions', cols: 2, rows: 1, pColor: '#58D68D', sColor: '#D5F5E3' },
    {action: 'duo', cols: 2, rows: 1, pColor: '#3498DB', sColor: '#D7E5F1' },
    {action: 'add_circle_outline', cols: 2, rows: 1, pColor: '#9B59B6', sColor: '#E8DAEF' },
    {action: 'settings', cols: 2, rows: 1, sColor: '#EAECEE', pColor: '#566573' },
  ];

  ngOnInit(): void {}
  

}
