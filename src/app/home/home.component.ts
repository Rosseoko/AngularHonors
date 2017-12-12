import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  
  user = {remember: false};
  
    constructor() { }
  
    ngOnInit() {
    }
  
    onSubmit() {
      console.log("User: ", this.user);
    }

}
