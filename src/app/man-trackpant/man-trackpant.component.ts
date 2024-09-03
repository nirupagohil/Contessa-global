import { Component } from '@angular/core';
import { TrackPantService } from '../track-pant.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-man-trackpant',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './man-trackpant.component.html',
  styleUrl: './man-trackpant.component.scss'
})
export class ManTrackpantComponent {
  public products: any = [];

  constructor(private _trackPantService: TrackPantService) { }

  ngOnInit() {
    this._trackPantService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
