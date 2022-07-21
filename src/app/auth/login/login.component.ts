import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authservice: AuthService) { }
  ngOnInit(): void {
    $(window).scroll(function(){
      var sticky = $('.sticky-wrapper'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('is-sticky');
      else sticky.removeClass('is-sticky');
    });
  }
}
