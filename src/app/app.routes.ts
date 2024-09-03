import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoungeWearComponent } from './lounge-wear/lounge-wear.component';
import { BottomWearComponent } from './bottom-wear/bottom-wear.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { ManTshirtComponent } from './man-tshirt/man-tshirt.component';
import { ManTrackpantComponent } from './man-trackpant/man-trackpant.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lounge', component: LoungeWearComponent },
    { path: 'bottom', component: BottomWearComponent },
    { path: 'tshirt', component: TshirtsComponent },
    { path: 'mantshirt', component: ManTshirtComponent },
    { path: 'track', component: ManTrackpantComponent },
    { path: '**', redirectTo: '' }
  ];
  
  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(RouterModule.forRoot(routes)),
      provideRouter(routes)
    ]
  });
  
