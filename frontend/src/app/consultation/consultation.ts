import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './consultation.html',
  styleUrl: './consultation.css'
})
export class Consultation implements OnInit {

  consultation: any = { appointment: {} };
  consultations: any[] = [];

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  save() {
    this.http.post('http://localhost:8080/consultations', this.consultation)
      .subscribe(() => {
        this.consultation = { appointment: {} };
        this.load();
      });
  }

  load() {
    this.http.get<any[]>('http://localhost:8080/consultations/patient/1')
      .subscribe(data => {
        console.log("CONSULTATIONS:", data);
        this.consultations = data;
         this.cd.detectChanges();
      });
  }

  ngOnInit() {
    this.load();
  }
}