import { Component, OnInit } from '@angular/core';
import { LeerJsonService } from '../../../servicios/leer-json.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  contenidoJSON1:any = [];
  contenidoJSON2:any = [];
  //jsonURL1:string = '../../../assets/json/habilidades-duras.json';
  //jsonURL1:string = 'http://localhost:8080/ver/habilidades-duras';
  jsonURL1:string = 'https://registered-jenn-blanche-a.koyeb.app/ver/habilidades-duras';
  //jsonURL2:string = '../../../assets/json/habilidades-blandas.json';
  //jsonURL2:string = 'http://localhost:8080/ver/habilidades-blandas';
  jsonURL2:string = 'https://registered-jenn-blanche-a.koyeb.app/ver/habilidades-blandas';

  constructor(
    private _servicio:LeerJsonService
  ) {
    this._servicio.getJSON(this.jsonURL1).subscribe(data => {
      this.contenidoJSON1 = data;
    });
    this._servicio.getJSON(this.jsonURL2).subscribe(data => {
      this.contenidoJSON2 = data;
    });
  }

  ngOnInit(): void {
  }

}
