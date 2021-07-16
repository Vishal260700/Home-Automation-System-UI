import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { BottomPopupComponent } from '../bottom-popup/bottom-popup.component';

export interface Device {
    id : string,
    deviceName : string,
    deviceType : string,
    deviceIcon : string,
    pColor : string,
    sColor : string
}

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {

  devices: Device[] = [
    {
    id : '1',
    deviceName : 'Desk  Light',
    deviceType : 'Philips Hue',
    deviceIcon : 'lightbulb',
    pColor : '#F4D03F',
    sColor : '#FCF3CF'},
    {
    id : '2',
    deviceName : 'Bedroom Speaker',
    deviceType : 'Google Nest mini',
    deviceIcon : 'speaker',
    pColor : '#3498DB',
    sColor : '#AED6F1'}
  ];


  constructor(private _bottomSheet: MatBottomSheet) {}


  openBottomSheet(deviceID : string, deviceType : string, deviceName : string) {
    this._bottomSheet.open(BottomPopupComponent, {data : {deviceId : deviceID, deviceType : deviceType, deviceName : deviceName}});
  }

  ngOnInit(): void {}

}
