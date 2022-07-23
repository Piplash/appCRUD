import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
    `

      h2{
        font-family: 'Montserrat', sans-serif;
      }

      img{
          max-height: 485px;
          max-width: 100%;
          box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 20%);
      }

      .container{
          min-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Josefin Sans', sans-serif;
      }

      .imagenInicio{
          text-align:center;
      }

      .descripcion{
        text-align: justify;
      }
    `
  ]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
