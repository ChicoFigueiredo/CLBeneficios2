import { Component, OnInit } from '@angular/core';
import { MiniboxValue } from '../minibox-value';
import { Response } from '@angular/http';
import { ClbenServiceService } from './../../servicos/clben-service.service';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard3',
  templateUrl: './admin-dashboard3.component.html',
  styleUrls: ['./admin-dashboard3.component.css']
})
export class AdminDashboard3Component implements OnInit {

  public MiniBoxes:Array<MiniboxValue> = []; 

  constructor(public s: ClbenServiceService) { }

  ngOnInit() {
     // Actualiza la barra latera y el footer
    AdminLTE.init();
    this.s.getMiniBoxes().subscribe((resp:Response) =>{
      this.MiniBoxes = resp.json();
    })
  }

}
