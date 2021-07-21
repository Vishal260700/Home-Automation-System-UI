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

// Modal
import {MatDialogModule} from '@angular/material/dialog';

// list
import {MatListModule} from '@angular/material/list'; 

// web cam
import {WebcamModule} from 'ngx-webcam';





// Components
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { BottomPopupComponent } from './bottom-popup/bottom-popup.component';
import { HomeActionsComponent } from './home-actions/home-actions.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    DeviceCardComponent,
    BottomPopupComponent,
    HomeActionsComponent,
    ProfileInfoComponent,
    ModalPopupComponent,
    SubscriptionsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSliderModule,
    MatDialogModule,
    MatListModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
