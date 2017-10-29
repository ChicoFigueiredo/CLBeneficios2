import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-minibox',
  templateUrl: './admin-minibox.component.html',
  styleUrls: ['./admin-minibox.component.css']
})
export class AdminMiniboxComponent implements OnInit {

  @Input('Valor') Valor: string = '120,2%';
  @Input('Titulo') Titulo: string = 'Meu Box da Hora';
  @Input('ClassCorFundo') ClassCorFundo: string = 'bg-aqua';
  @Input('ClassIcon') ClassIcon: string = 'ion ion-bag';
  @Input('Url') Url: string = '#';
  @Input('UrlTitle') UrlTitle: string = 'Ver mais';

  constructor() { }

  ngOnInit() {
  }

}
