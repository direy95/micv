import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged=false;
  constructor(private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged=true;
      document.getElementById("login").innerHTML="Cerrar sesión";
    }
  }

  Login(){
    if (this.tokenService.getToken()){
      this.isLogged=true;
      document.getElementById("login").innerHTML="Cerrar sesión";
    }else{
      this.router.navigate(['iniciar-sesion']);
    }
  }
}
