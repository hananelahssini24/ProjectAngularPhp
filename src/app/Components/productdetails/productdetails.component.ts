import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import {ActivatedRoute} from "@angular/router";
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  // @ts-ignore
  productDetails: Product;

  constructor(private crudService: CrudService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = '';
    if(this.activatedRoute.snapshot.params['productId']) {
      productId = this.activatedRoute.snapshot.params['productId'];
      if (productId !== '') {
        this.loadProductDetails(productId);
      }
    }
  }

  loadProductDetails(productId: any) {
    this.crudService.loadProductInfo(productId).subscribe(res => {
      this.productDetails = res;
    });
  }

}
