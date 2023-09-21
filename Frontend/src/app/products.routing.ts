import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
    { path: '', component: ProductListComponent},
    // { path: ':id', component: ProductDetailsComponent},
    { path: 'add', component: AddProductComponent},
    { path: 'update/:slug', component: AddProductComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }