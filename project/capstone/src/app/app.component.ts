import { Component, OnInit } from '@angular/core';
import { ContactDetailsService } from './contactdetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'capstone';
  public contactDetails: any;
  constructor(private _myService:ContactDetailsService) { }

  ngOnInit() {
    this.getDetails();
}


getDetails() {
  this._myService.getContactDetails().subscribe(
      //read data and assign to public variable students
      data => { 
        this.contactDetails = data

      },
      err => console.error(err),
      () => console.log('finished loading')
  );
}
}
