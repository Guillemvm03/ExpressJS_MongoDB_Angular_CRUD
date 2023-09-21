import { Component, OnInit } from '@angular/core';

import { Products } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

import { ToastrService } from 'ngx-toastr/public_api';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {

  ngOnInit(): void {
    console.log('patatatatatatata');
    
  };


  insert_product(): void{
  
  }

  update_product(): void{

  }

  get_product(): void{

  }

}




