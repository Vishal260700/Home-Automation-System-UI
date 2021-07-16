import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Grid list
import {MatGridListModule} from '@angular/material/grid-list';

// Cards
import {MatCardModule} from '@angular/material/card';

// Buttons
import {MatButtonModule} from '@angular/material/button';

// Icons
import {MatIconModule} from '@angular/material/icon';

// bottom-sheet
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

// slider
import {MatSliderModule} from '@angular/material/slider';


// Components
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { BottomPopupComponent } from './bottom-popup/bottom-popup.component';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    DeviceCardComponent,
    BottomPopupComponent,
    HomeActionsComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
