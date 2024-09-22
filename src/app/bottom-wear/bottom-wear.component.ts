import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BottomWearService } from '../bottom-wear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-wear',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './bottom-wear.component.html',
  styleUrl: './bottom-wear.component.scss'
})
export class BottomWearComponent {
  public products: any = [];

  constructor(private _bottomService: BottomWearService, private router: Router) { }

  ngOnInit() {
    this._bottomService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDetail(id: any) {
    this.router.navigate(['/detail', 1,id]); 
  }
}
