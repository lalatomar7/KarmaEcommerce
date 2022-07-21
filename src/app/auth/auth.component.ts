import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _authservice: AuthService) { }

  ngOnInit(): void {
    // this.getdata()
  }

  // getnewdata:any;
  // getdata(){
  //   this._authservice.getstudents().subscribe(res =>{
  //     console.log(res);
  //   })
  // }


}
