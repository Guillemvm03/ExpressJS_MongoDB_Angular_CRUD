import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})


export class ProductCardComponent implements OnInit {
  @Input() value: Products | undefined;
  constructor () {}

  ngOnInit(): void {}

  updateProduct(): void {
    console.log('actualizando producto')
  }

  deleteProduct(): void {
    console.log('eliminando Producto');
    
  }
}
