import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { TokenService } from '../../../servicios/token.service';
import { LeerJsonService } from '../../../servicios/leer-json.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss']
})
export class ExperienciaLaboralComponent implements OnInit {

  rutaImg:string = '';
  contenidoJSON:any = [];
  //jsonURL:string = '../../../assets/json/experiencia-laboral.json';
  //jsonURL:string = 'http://localhost:8080/ver/experiencias';
  //jsonURL:string = 'https://registered-jenn-blanche-a.koyeb.app/ver/experiencias';
  jsonURL:string = 'https://backend-app-i6ew.onrender.com/ver/experiencias';
  isLogged = false;


  constructor(
    private componenteprincipal:AppComponent,
    private _servicio:LeerJsonService,
    private tokenService:TokenService
  ) {
    this.rutaImg = this.componenteprincipal.ruta_imagenes;
    this._servicio.getJSON(this.jsonURL).subscribe(data => {
      this.contenidoJSON = data;
      //console.log(this.contenidoJSON);
    });
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
