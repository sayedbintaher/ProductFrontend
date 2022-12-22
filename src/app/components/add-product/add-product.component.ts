import { Router} from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  public addProduct!: IProduct;
  public updatedProductList!: IProduct[]
  constructor(private productService: ProductService,private router: Router){}

  onSubmit(addProductForm: NgForm) {
    const navigationDetails: string[] = ['/'];
    this.productService.createProduct(addProductForm.value).subscribe((result: IProduct[]) => (this.updatedProductList = result));
    alert("Successfully Added");
    this.router.navigate(navigationDetails);
  }
}
