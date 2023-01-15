import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../servicios/token.service'
import { AuthService } from '../../servicios/auth.service'
import { LoginUsuario } from '../../modelo/login-usuario'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password:string;
  roles:string[] = [];
  errMjs!:string;
  

  constructor(private tokenService:TokenService,private authService:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin():void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        //this.roles = data.authorities;
        this.roles = this.tokenService.getAuthorities(); //No va, revisar línea comentada de arriba.
        this.router.navigate(['']);
      },err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMjs = err.error.mensaje;
        console.log(this.errMjs);
      });
  }
}
