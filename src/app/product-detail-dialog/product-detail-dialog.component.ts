import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-product-detail-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonModule,
    FormsModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ImageSliderComponent
  ],
  templateUrl: './product-detail-dialog.component.html',
  styleUrl: './product-detail-dialog.component.scss'
})
export class ProductDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close({ confirmed: true, data: this.data });
  }

  onCancel(): void {
    this.dialogRef.close({ confirmed: false });
  }
}
