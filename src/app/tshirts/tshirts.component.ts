import { Component } from '@angular/core';
import { TshirtService } from '../tshirt.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tshirts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tshirts.component.html',
  styleUrl: './tshirts.component.scss'
})
export class TshirtsComponent {
  public products: any = [];

  constructor(private _tshirtService: TshirtService, private router: Router) { }

  ngOnInit() {
    this._tshirtService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDetail(id: any) {
    this.router.navigate(['/detail', 5,id]);   //5 for womans tshirts 
  }
}
