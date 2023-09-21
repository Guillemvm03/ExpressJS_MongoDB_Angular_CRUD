import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {

  constructor (private Productos: ProductService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    console.log(this.route.snapshot.params["id"]);
    
    
  };


  insert_product(): void{
  
  }

  update_product(id : string): void{

    
  }

  get_product(): void{

  }

}




