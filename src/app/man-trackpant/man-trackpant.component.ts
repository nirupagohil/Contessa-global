import { Component } from '@angular/core';
import { TrackPantService } from '../track-pant.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-trackpant',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './man-trackpant.component.html',
  styleUrl: './man-trackpant.component.scss'
})
export class ManTrackpantComponent {
  public products: any = [];

  constructor(private _trackPantService: TrackPantService, private router: Router) { }

  ngOnInit() {
    this._trackPantService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDetail(id: any) {
    this.router.navigate(['/detail', 3,id]);   //3 for mans track pants 
  }
}
