import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import { DataserviceService } from './dataservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { User } from 'src/app/usermodal';
export interface User {
    url: string;
    title: string;
   created_at: string;
   author:string;
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  displayedColumns: string[] = ['title', 'url', 'created_at','author'];
  dataSource: MatTableDataSource<any>;
  subscription: any;
  data;
  details: any;
  h: any;

constructor(private service:DataserviceService, private dialog
  : MatDialog) 
   {}
  ngOnInit() 
  {
    this.subscription=timer(0,10000).pipe(
      concatMap(()=>this.service.gettabledata())
    ).subscribe(resp=>{console.log(resp,"table data");
    this.data=resp['hits'];
    this.details=this.data;
  console.log(this.details,"final details of TABLE");
  this.dataSource = new MatTableDataSource(this.details); 
  })
   }
   
 setupFilter(column: string) {
  this.dataSource.filterPredicate = (d: User, filter: string) => {
    const textToSearch = d[column] && d[column].toLowerCase() || '';
    return textToSearch.indexOf(filter) !== -1;
  };
}


searchFilter(filterValue: string) {
  this.setupFilter('title')
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
   modal(row) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: row
    });
    console.log(row);
   }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
   
