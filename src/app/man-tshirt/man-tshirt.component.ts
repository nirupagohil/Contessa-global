import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ManTshirtService } from '../man-tshirt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-tshirt',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './man-tshirt.component.html',
  styleUrl: './man-tshirt.component.scss'
})
export class ManTshirtComponent {
  public products: any = [];

  constructor(private _tshirtService: ManTshirtService, private router: Router) { }

  ngOnInit() {
    this._tshirtService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDetail(id: any) {
    this.router.navigate(['/detail', 4,id]);   //4 for mans tshirts 
  }
}
