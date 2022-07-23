import { Component, OnInit } from '@angular/core';
import { navItems } from '../../interfaces/nav-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      body{
        position: relative;
        height: 100vh;
      }

      body::after{
        content: '';
        display: block;
        height: 50px; /* Set same as footer's height */
      }

      #body{
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 20px;
        margin-bottom: 50px;
        height: 100%;
      }

      .custom-nav{
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        background-color: rgb(254, 155, 42);
      }

      .custom-nav a{
        color: rgb(255, 255, 255);
        transition: 0.4s;
      }

      .custom-nav a:hover{
        background-color: rgb(0 0 0 / 30%);
        transition: 0.4s;
      }

      .custom-nav .active {
        background-color: rgb(0 0 0 / 30%);
      }
      
      .custom-nav .navbar-brand{
        color: rgb(255, 255, 255);
        pointer-events: none;
      }

      .footer{
        height: 50px; /* Set same as footer's height */
        width: 100%;
        bottom: 0;
        position: fixed;
        text-align: center;
        color: white;
        background-color: rgb(254, 155, 42);
        text-transform: uppercase;
      }

      .footer p{
        font-family: 'Montserrat', sans-serif;
        font-size:12px;
        margin-top: 15px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  //Items de Navbar. Si agregamos acá, automáticamente se añaden en el componente

  navItems: navItems[] = [
    {
      label : 'Inicio',
      link  : 'inicio'
    },
    {
      label : 'Listado de Preparaciones',
      link  : 'listar'
    },
    {
      label : 'Nueva Preparación',
      link  : 'agregar'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
