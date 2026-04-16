import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class Patient implements OnInit {

  patient: any = {};
  patients: any[] = [];

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  save() {
    this.http.post('http://localhost:8080/patients', this.patient)
      .subscribe(() => {
        this.patient = {};
        this.load();
      });
  }

  load() {
    this.http.get<any[]>('http://localhost:8080/patients')
      .subscribe(data => {
        this.patients = data;
        this.cd.detectChanges(); 
      });
  }

  ngOnInit() {
    this.load();
  }
}