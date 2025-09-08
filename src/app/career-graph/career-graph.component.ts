import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-career-graph',
  imports: [CommonModule],
  templateUrl: './career-graph.component.html',
  styleUrl: './career-graph.component.css'
})
export class CareerGraphComponent {
  constructor(private dialogRef: MatDialogRef<CareerGraphComponent>) {}

  close() {
    this.dialogRef.close();
  }


 years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  yLabels = [0, 20, 40, 60, 80, 100];
  skills = [
    { name: 'Java', color: '#1976d2', data: [30, 40, 60, 70, 80, 90, 95] },
    { name: 'Angular', color: '#388e3c', data: [0, 20, 40, 60, 80, 90, 95] },
    { name: 'HTML', color: '#fbc02d', data: [40, 50, 60, 70, 80, 85, 90] },
    { name: '.NET', color: '#d32f2f', data: [0, 0, 20, 40, 60, 70, 80] },
    { name: 'CSS', color: '#0288d1', data: [30, 40, 50, 60, 70, 80, 85] },
    { name: 'JavaScript', color: '#ffa000', data: [20, 30, 50, 70, 80, 90, 95] },
    { name: 'SQL', color: '#7b1fa2', data: [0, 10, 20, 40, 60, 70, 80] },
  ];

  getX(i: number): number {
    return 60 + i * 60;
  }
  getY(val: number): number {
    // 0 proficiency at bottom (y=260), 100 at top (y=60)
    return 260 - (val / 100) * 200;
  }
  getSkillPoints(data: number[], s: number): string {
    return data.map((v, i) => `${this.getX(i)},${this.getY(v)}`).join(' ');
  }
}