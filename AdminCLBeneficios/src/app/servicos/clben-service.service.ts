import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ct } from './../admin/admin-geral';

@Injectable()
export class ClbenServiceService {

  constructor(public http:Http) { }

  getMiniBoxes(){
    return this.http.get(ct.jsonMiniBox)
  }

}
