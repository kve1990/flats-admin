import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApartmentsService } from 'app/services/apartments.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [`
    .full-width{width: 100%}
    textarea{min-height: 150px}
    .button-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .button-row button{
      max-width: 150px;
      margin-right: 10px;
    }
  `],
  providers: [ApartmentsService]
})
export class EditComponent {
  building: any;

  constructor(private _route: ActivatedRoute,
              private service: ApartmentsService,
              private _snackbar: MdSnackBar,
              private _location: Location,
              private _router: Router){

  }

  ngOnInit(){
    if(this._route.snapshot.params['id']){
      this.service.getItem(this._route.snapshot.params['id']).subscribe(res => this.building = res[0]);
    }else{
      this.building = {
        caption: '',
        description: '',
        house_num: '',
        floor_count: '',
        material: '',
        min_price_area: '',
        accreditation: '',
        military: '',
        publicate: '',
        street_id: '',
        district: '',
        yandexmap_coords: ''
      }
    }
    
  }

  saveBuilding(){
    if(this._route.snapshot.params['id']){
      this.service.updateBuilding(this.building).subscribe( res => {
        this._snackbar.open('Данные сохраненны', 'Undo', {
          duration: 3000
        });
      });
    }else{
      let request = JSON.stringify(this.building)
      this.service.addBuilding(request).subscribe( res => {
        if(res.status === 'ok') {
          this._snackbar.open('Данные успешно добавлены', '<b>lskdjf</b>', {duration: 500});
          this._router.navigate(['']);
        }
      });
    }
  }

  back(){
    this._location.back();
  }

}
