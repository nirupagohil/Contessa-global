import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    console.log(this.images)
    if (this.images.length === 0) {
      console.error('No images provided for the slider.');
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
