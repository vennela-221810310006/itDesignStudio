import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactDetailsService } from '../contactdetails.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent  {
postResponse:any;

zipCodes=[
  {
    "zip":"30144",
    "city":"Kennsaw",
    "state":"GA"
  },
  {
    "zip":"30152",
    "city":"Kennsaw",
    "state":"GA"
  },
  {
    "zip":"30060",
    "city":"Marietta",
    "state":"GA"
  },
  {
    "zip":"30061",
    "city":"Merietta",
    "state":"GA"
  },
  {
    "zip":"30188",
    "city":"Woodstock",
    "state":"GA"
  },
  {
    "zip":"30189",
    "city":"Woodstock",
    "state":"GA"
  },
   
]



  profileForm = this.fb.group({ 
    contactName: ['', Validators.required],
    contactJobTitle: ['', Validators.required],
    contactEmail: ['', Validators.required],
    contactPhone: ['', Validators.required],
    contactAddress: this.fb.group({
      street:['', Validators.required],
      zip:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required]
    }),
    contactProjectTitle: ['', Validators.required],
    contactDescProject: ['', Validators.required],
    contactTechSkills: ['', Validators.required],
  });

  get zip(): any {
    return this.profileForm.get('contactAddress.zip');
  }

  get city(): any {
    return this.profileForm.get('contactAddress.city');
  }

  get state(): any {
    return this.profileForm.get('contactAddress.state');
  }
  constructor(private fb: FormBuilder,private _myService:ContactDetailsService) { }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
   this._myService.addcontactDetails(this.profileForm.value).subscribe((responseData) => {
    this.postResponse=responseData;
    }); 
  }
  autofillCity(){
    console.warn(this.zip?.value);
    let zipEntered = this.zip.value;
    let zipObj = this.zipCodes.filter(obj => obj.zip == zipEntered);
    if(zipObj.length > 0){
      this.city.setValue(zipObj[0].city);
      this.state.setValue(zipObj[0].state);
    }

  }
}
