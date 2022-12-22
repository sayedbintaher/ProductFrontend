import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  editProduct?: IProduct;
  updatedProductList?: IProduct[];
  public productId!: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router){}

  ngOnInit():void{
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe((result: IProduct) => (this.editProduct =result))
    console.log(this.editProduct?.name);
  }

  updateProduct(product: IProduct){
    const navigationDetails: string[] = ['/'];
    this.productService.updateProduct(product).subscribe((result: IProduct) => (this.editProduct =result));
    alert("Successfully Updated");
    this.router.navigate(navigationDetails);

  }
  deleteProduct(product: IProduct){
    const navigationDetails: string[] = ['/'];
    this.productService.deleteProduct(product).subscribe((result: IProduct[]) => (this.updatedProductList = result));
    alert("Successfully Deleted");
    this.router.navigate(navigationDetails);
  }

}
