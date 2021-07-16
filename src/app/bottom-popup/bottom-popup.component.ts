import { Component, Inject, OnInit } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottom-popup',
  templateUrl: './bottom-popup.component.html',
  styleUrls: ['./bottom-popup.component.css']
})
export class BottomPopupComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
