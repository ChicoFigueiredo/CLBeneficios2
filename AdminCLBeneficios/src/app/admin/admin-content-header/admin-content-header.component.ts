import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-content-header',
  templateUrl: './admin-content-header.component.html',
  styleUrls: ['./admin-content-header.component.css']
})
export class AdminContentHeaderComponent implements OnInit {

  @Input('Titulo') Title:string="";
  @Input('Subtitulo') SubTitle:string="";
  @Input('Breadcrumb') Breadcrumb:Array<any> = [
    {title:'Home', url:'/', icon:'fa fa-dashboard' },
    {title:'Aqui', url:'/aqui', icon:''}
  ]
  constructor() { }

  ngOnInit() {
  }

}
