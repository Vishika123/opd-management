import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { Patient } from './patient/patient';
import { Appointment } from './appointment/appointment';
import { Consultation } from './consultation/consultation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   
    Patient,
    Appointment,
    Consultation
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  screen: string = 'patient';

  show(screenName: string) {
    this.screen = screenName;
  }
}