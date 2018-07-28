import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 abc ="orange"
  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("oninit");
  }

  public hasError = true;
  public titleStyle = {
    color:'#fff',
    fontStyle:'italic',
    fontSize:'32px',
    textDecoration:'underline',
    background:'blue'
  }

}
