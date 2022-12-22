import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: "Product List"
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    title: "Edit Product"
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    title: "Add Product"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
