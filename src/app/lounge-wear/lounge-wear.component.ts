import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoungeWearService } from '../lounge-wear.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lounge-wear',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lounge-wear.component.html',
  styleUrl: './lounge-wear.component.scss'
})
export class LoungeWearComponent {
  public products: any = [];

  constructor(private _loungeService: LoungeWearService) { }

  ngOnInit() {
    this._loungeService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }
}
