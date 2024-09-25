import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BottomWearService } from '../bottom-wear.service';
import { HttpClientModule } from '@angular/common/http';
import { LoungeWearService } from '../lounge-wear.service';
import { TrackPantService } from '../track-pant.service';
import { TshirtService } from '../tshirt.service';
import { ManTshirtService } from '../man-tshirt.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    CommonModule, NgbModule, HttpClientModule
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {
  public productId: any;
  public product: any;
  public categoryId: any;

  constructor(private route: ActivatedRoute, private _bottomWearService: BottomWearService, 
    private _loungeWear: LoungeWearService,
    private _mansTrackService: TrackPantService,
    private _mansTshirtService: ManTshirtService,
    private _womansTshirtService: TshirtService
  ){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id'); 
      this.categoryId = params.get('categoryId');
  
      if (this.productId) {
        //1 for woman bottom wear
        if (this.categoryId == "1") {
          this._bottomWearService.getById(Number(this.productId)).subscribe({
            next: data => {
                if (data) {
                    this.product = data;
                } else {
                    console.error('Product not found');
                }
            },
            error: error => {
                console.error('Error fetching product:', error);
            }
        });
        }
        //2 for woman lounge wear
        else if (this.categoryId == "2") {
          this._loungeWear.getById(Number(this.productId)).subscribe({
            next: data => {
                if (data) {
                    this.product = data;
                } else {
                    console.error('Product not found');
                }
            },
            error: error => {
                console.error('Error fetching product:', error);
            }
        });
        }
        //3 for mans track pants
        else if (this.categoryId == "3") {
          this._mansTrackService.getById(Number(this.productId)).subscribe({
            next: data => {
                if (data) {
                    this.product = data;
                } else {
                    console.error('Product not found');
                }
            },
            error: error => {
                console.error('Error fetching product:', error);
            }
        });
        }
         //4 for mans tshirt
         else if (this.categoryId == "4") {
          this._mansTshirtService.getById(Number(this.productId)).subscribe({
            next: data => {
                if (data) {
                    this.product = data;
                } else {
                    console.error('Product not found');
                }
            },
            error: error => {
                console.error('Error fetching product:', error);
            }
        });
        }
        //5 for womans tshirt
        else if (this.categoryId == "5") {
          this._womansTshirtService.getById(Number(this.productId)).subscribe({
            next: data => {
                if (data) {
                    this.product = data;
                } else {
                    console.error('Product not found');
                }
            },
            error: error => {
                console.error('Error fetching product:', error);
            }
        });
        }
      }
    });
  }

  selectedSize: string = '';
  selectedColor: string = '';

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  getColor(color: string) {
    // Convert color names to CSS-friendly values (adjust if needed)
    const colors: any = {
      Blue: 'blue',
      Navy: '#000080',
      Lavender: '#E6E6FA',
      White: 'white',
      Grey: 'grey',
      Black: 'black',
      Maroon: '#800000',
      Beige: '#F5F5DC',
      Brown: 'brown',
      Olive: '#808000'
    };
    return colors[color] || 'transparent';
  }

  getCategory(catId: any){
    switch (catId) {
      case 1:
          return 1;
      case 2:
          return 2;
      case 3:
          return 3;
      case 4:
          return 4;
      case 5:
          return 5;
      case 6:
          return 6;
      case 7:
          return 7;
      default:
          return 0; 
    }
  }
}
