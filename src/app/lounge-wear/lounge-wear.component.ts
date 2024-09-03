import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoungeWearService } from '../lounge-wear.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-lounge-wear',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatDialogModule,], 
  templateUrl: './lounge-wear.component.html',
  styleUrls: ['./lounge-wear.component.scss'] // Corrected typo from styleUrl to styleUrls
})
export class LoungeWearComponent {
  public products: any = [];

  constructor(
    private _loungeService: LoungeWearService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this._loungeService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDialog(product: any) {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      width: '60vw', 
      maxWidth: '70vw', 
      data: product
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
