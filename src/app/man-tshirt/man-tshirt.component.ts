import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ManTshirtService } from '../man-tshirt.service';

@Component({
  selector: 'app-man-tshirt',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './man-tshirt.component.html',
  styleUrl: './man-tshirt.component.scss'
})
export class ManTshirtComponent {
  public products: any = [];

  constructor(private _tshirtService: ManTshirtService) { }

  ngOnInit() {
    this._tshirtService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
