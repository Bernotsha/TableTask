import { Component, OnInit } from "@angular/core";
import { TableServiceService } from "src/app/services/table-service.service";

import { ColDef } from 'ag-grid-community';

@Component({
    selector:'app-grid-table-component',
    templateUrl:'./grid-component.html',
    styleUrls:['./grid-component.css']
})


export class GridTableComponent implements OnInit{
    constructor(public infoServiceService: TableServiceService){ }
    ngOnInit(): void {
        this.infoServiceService.getInfoData().subscribe( res => {
            this.dataSource = res;
            console.log("Im called")
        });   
    }

    columnDefs: ColDef[] = [
        { field: 'train_no' },
        { field: 'train_name' },
        { field: 'train_exptime' },
        { field: 'train_ad' },
        { field: 'train_pf' }

    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    dataSource: any[] = [];    

    table_header:any =[];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','platform'];

} 