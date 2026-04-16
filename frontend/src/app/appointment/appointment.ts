import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment implements OnInit {

  appointment: any = { patient: {} };
  appointments: any[] = [];

constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  save() {
    this.http.post('http://localhost:8080/appointments', this.appointment)
      .subscribe(() => {
        this.appointment = { patient: {} };
        this.load();
      });
  }

  load() {
    this.http.get<any[]>('http://localhost:8080/appointments')
      .subscribe(data => {
        console.log("APPOINTMENTS:", data);
         this.appointments = data;
      this.cd.detectChanges(); // 🔥 FIX
      });
  }

  ngOnInit() {
    this.load();
  }
}