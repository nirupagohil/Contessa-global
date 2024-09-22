import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // Import NgbModule for the carousel

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule, NgbModule],  // Use CommonModule and NgbModule
})
export class HomeComponent {
  images = [
    'assets/Banner/1.svg',
    'assets/Banner/2.svg',
    'assets/Banner/3.svg',
    'assets/Banner/4.svg',
    'assets/Banner/5.svg'
  ];
}
