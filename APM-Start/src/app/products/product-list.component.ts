import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  products: IProduct[];
  errorMessage: string;
  _listFilter: string;
  filteredProducts: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  onRatingClick(message: string): void {
    this.pageTitle = `Product List: ${message} `;
  }
}
