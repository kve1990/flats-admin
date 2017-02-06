import {Component, OnInit, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import { ApartmentsService } from 'app/services/apartments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ApartmentsService]
})
export class ListComponent {
  buildings: any[];
  members: any[];

  constructor(private service: ApartmentsService, private dialog: MdDialog){

  }

  ngOnInit(){
    this.service.getList().subscribe(res => {
            this.buildings = res;
        });

    this.service.getMembers().subscribe(res => {
            this.members = res;
        });
  }

  changeVisisbility(building){
    building.publicate = (building.publicate === 'y') ? 'n' : 'y';
    this.service.updateBuilding(building).subscribe(res => res);
  }

  deleteBuilding(building){
    let dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.deleteBuilding(building.building_id)
          .subscribe(res => {
             if(res.content === 'ok'){
               this.buildings.forEach( (item, itr) => {
                 if(item.building_id === building.building_id){
                   this.buildings.splice(itr, 1);
                 }
               })
             }
          });
      }
    })
    
  }

  deleteRealtor(realtor){
    let dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.deleteRealtor(realtor.acc_id)
          .subscribe(res => {
             if(res.content === 'ok'){
               this.members.forEach( (item, itr) => {
                 if(item.acc_id === realtor.acc_id){
                   this.members.splice(itr, 1);
                 }
               })
             }
          });
      }
    })
    
  }
}

@Component({
  template: `
    <md-dialog-content>
      <h4 md-dialog-title>Вы действительно хотите удалить данную запись?</h4>
    </md-dialog-content>
    <md-dialog-actions>
      <button md-raised-button md-dialog-close color="accent">Отмена</button>
      <button md-raised-button color="warn" (click)="dialogRef.close(true)">Удалить</button>
    </md-dialog-actions>
  `,
  styles: ['h4{color:#eee}md-dialog-actions{display:flex;justify-content:space-around;}button{max-width: 150px}']
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
