import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentsService {
    baseUrl: string;

    constructor(private http: Http, ) {
        //this.baseUrl = 'app/services/apartments.json';
        this.baseUrl = 'http://a0116545.xsph.ru/api/';
    }

    getList(){
        return this.http.get(this.baseUrl + 'apartments')
            .map(res => res.json());
    }

    getItem(id){
        return this.http.get(this.baseUrl + 'building/' + id)
            .map(res => res.json());
    }

    getRealtor(id){
        return this.http.get(this.baseUrl + 'realtor/' + id)
            .map(res => res.json());
    }

    getFlats(id){
        return this.http.get(this.baseUrl + 'flats/' + id)
            .map(res => res.json());
    }

    getFlat(id){
        return this.http.get(this.baseUrl + 'flat/' + id)
            .map(res => res.json());
    }

    getMembers(){
        return this.http.get(this.baseUrl + 'members')
            .map(res => res.json());
    }

    addBuilding(request){
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

        return this.http.post(this.baseUrl + 'add_building', request, { headers: headers })
            .map(res => res.json());
    }

    addRealtor(request){
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

        return this.http.post(this.baseUrl + 'add_realtor', request, { headers: headers })
            .map(res => res.json());
    }

    updateBuilding(building){
        let request = JSON.stringify(building);
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

        return this.http.put(this.baseUrl + 'update_building/' + building.building_id, request, { headers: headers })
            .map(res => res.json());
    }

    updateRealtor(realtor){
        let request = JSON.stringify(realtor);
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

        return this.http.put(this.baseUrl + 'update_realtor/' + realtor.acc_id, request, { headers: headers })
            .map(res => res.json());
    }

    deleteBuilding(id){
        let body = 'delete';
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return this.http.delete(this.baseUrl + 'delete_building/' + id, { headers: headers })
            .map(res => res.json());
    }

    deleteRealtor(id){
        let body = 'delete';
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return this.http.delete(this.baseUrl + 'delete_realtor/' + id, { headers: headers })
            .map(res => res.json());
    }
}