import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-graph',
  imports: [CommonModule],
  templateUrl: './skills-graph.component.html',
  styleUrl: './skills-graph.component.css'
})
export class SkillsGraphComponent {
constructor(private dialogRef: MatDialogRef<SkillsGraphComponent>) {}

  close() {
    this.dialogRef.close();
  }

 skills = [
    { name: 'Java', level: 'strong', color: '#1976d2' },
    { name: 'Angular', level: 'strong', color: '#388e3c' },
    { name: 'HTML', level: 'average', color: '#fbc02d' },
    { name: '.NET', level: 'basic', color: '#d32f2f' },
    { name: 'CSS', level: 'average', color: '#0288d1' },
    { name: 'JavaScript', level: 'strong', color: '#ffa000' },
    { name: 'SQL', level: 'basic', color: '#7b1fa2' },
  ];

  getPercent(level: string): number {
    if (level === 'strong') return 90;
    if (level === 'average') return 65;
    return 40;
  }
}
