import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {

  queryParams = '';
  searchKeyword = '';

  constructor( ) {};

  ngOnInit(): void {
  }

}
