import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // regform!: FormGroup;
  constructor(private _fb: FormBuilder, private _authservice: AuthService) { }

  ngOnInit(): void {
    
  }
 

}
