import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  product: IProduct;
  errorMessage: string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct(1).subscribe({
      next: (x) => {
        this.product = x;
        this.pageTitle = x.productName;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
