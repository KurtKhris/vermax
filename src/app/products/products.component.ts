import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IgofixModalComponent } from './igofix-modal/igofix-modal.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onIgofix(){
    this.dialog.open(IgofixModalComponent);
  }

}
