import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
    { path: '', component: ProductListComponent},
    // { path: ':id', component: ProductDetailsComponent},
    // { path: 'add', component: AddProductComponent},
    // { path: 'update/:id', component: AddProductComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }