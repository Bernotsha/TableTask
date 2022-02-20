import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Information } from "src/app/models/TableData.model";
import { TableServiceService } from "src/app/services/table-service.service";



@Component({
    selector:'app-mat-table-component',
    templateUrl:'./mat-component.html',
    styleUrls:['./mat-component.css']
})


export class MatTableComponent implements OnInit{
    constructor(public infoServiceService: TableServiceService){ }
    ngOnInit(): void {
        this.infoServiceService.getInfoData().subscribe( res => {
            this.dataSource = new MatTableDataSource(res);
            this.trainlist = res;
            console.log("Got data soruce")
        });      }


    trainmodel = new Information();
    trainlist : Information[] = [];

    dataSource = new MatTableDataSource(this.trainlist);

    

    onSubmit() {
    console.log("on submit");   
    console.log(this.trainmodel);
    console.log(this.trainmodel.train_no)
    this.trainlist.push(this.trainmodel);
    this.dataSource = new MatTableDataSource(this.trainlist);
    }
  displayedColumns = ['TrainNO', 'TrainName', 'Expt.Time', 'A/D','Platform'];

} 

  
