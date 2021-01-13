import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneConversion';

  showMsg = 1; //structural directive
  colorname =  'green';
  readMe       ()  {
    console.log("Button Clicked //  component directive (function in app.componrnt)");
    
  }
  switchValue=5;

  subTitle = 'Its fun to learn Interpolation';
  epNo = 17;

//object
  user = {
    name :   'tushank',
    PNR : 105,
    DOB : 16/9/1996
  };


  users = [{
    name : 'a',
    city : 'Sydney',
    cityCode : 'SYD'
  },
  {
    name : 'c',
    city : 'Delhi',
    cityCode : 'DEL'
  },
  {
    name : 'b',
    city : 'MUMBAI',
    cityCode : 'BOM'
  }];

  colorVal  = 'red';
  hrefVal = 'http://google.com';

  showAlert(){
    alert('Hi from tushank');
  }
  firstName = '';
  readFirstName(){
    alert(this.firstName);
  }

}
