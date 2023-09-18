import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {ProductsRoutingModule} from './products.routing';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule
    ]
})

export class ProductsModule {}