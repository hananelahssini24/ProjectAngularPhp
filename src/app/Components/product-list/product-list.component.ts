import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import {Router} from "@angular/router";
declare const Swal: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  columnDefs = [
    {
      field: 'p_name',
      headerName: 'Name',
      sortable: true,
      headerClass: 'header-cell'
    },
    {
      field: 'p_description',
      headerName: 'Desc',
      sortable: true,
      headerClass: 'header-cell'
    },
    {
      field: 'p_price',
      headerName: 'Price',
      sortable: true,
      headerClass: 'header-cell',
       cellRenderer: this.priceCellRender.bind(this)
    },
    {
      field: '',
      headerName: 'Actions',
      headerClass: 'header-cell',
      width: 250,
       cellRenderer: this.actionRender.bind(this)
    }
  ];
  rowData: any = [];
  gridOptions = {
    rowHeight: 50
  }
  //*********************************************************************** */
  productList:any=[];
  constructor(private CrudService :CrudService,private router:Router){}
  ngOnInit(): void {
    this.getProductList()
  }
  getProductList(){
    this.CrudService.getAllProducts()
    .subscribe(res => {
      this.productList=res;
      this.rowData = res;
      console.log('Res='+res)
    })
  }
  //********************************************************************** */
  actionRender(params: any) {
    let div = document.createElement('div');
    let htmlCode = '<button type="button" class="btn btn-success">View</button>\n' +
      '<button type="button" class="btn btn-danger">Delete</button>\n' +
      '<button type="button" class="btn btn-warning">Edit</button>'
    div.innerHTML = htmlCode;
    //handle view button
    let viewButton = div.querySelector('.btn-success');
    // @ts-ignore
    viewButton.addEventListener('click', () => {
      this.viewProductDetails(params);
    });

    //handle edit button
    let editButton = div.querySelector('.btn-warning');
    // @ts-ignore
    editButton.addEventListener('click', () => {
      this.editProductDetails(params);
    });

    //handle delete button
    let deleteButton = div.querySelector('.btn-danger');
    // @ts-ignore
    deleteButton.addEventListener('click', () => {
      this.deleteProduct(params);
    });
    return div;
  }

  viewProductDetails(params: any) {
    this.router.navigate(['/view-product-details/' + params.data.p_id]);
  }

  editProductDetails(params: any) {
    this.router.navigate(['/update-product/' + params.data.p_id]);
  }

  deleteProduct(params: any) {
    const that = this;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        that.CrudService.deleteProduct(params.data.p_id).subscribe(res => {
          if(res.result === 'success') {
            this.getProductList();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          }
        });
      }
    });
  }

  priceCellRender(params: any) {
    return params.data.p_price +' dhs ';
  }
  }
