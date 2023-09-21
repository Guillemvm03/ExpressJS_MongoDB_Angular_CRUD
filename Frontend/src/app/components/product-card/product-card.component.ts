import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})


export class ProductCardComponent implements OnInit {
  @Input() currentProduct: Products | undefined;

  constructor (private productService: ProductService,
     private toastrService: ToastrService) {}

  ngOnInit(): void {}

  deleteProduct(id: string): void {
    console.log('eliminando Producto');

    this.productService.delete(id).subscribe({
      next: data => {

        this.productService.products = this.productService.products.filter(p => p.id !== this.currentProduct?.id)
        this.toastrService.success("This product has been removed")
        
      },//next
      error: (e) => this.toastrService.error("Can't remove this product")
      
    })
    


    
  }
}
