import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [
    {
     "userID": 1,
     "isSelected": false,
     "userName": "Dianne Russell",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "dianne.russell@gmail.com"
    },
    {
     "userID": 2,
     "isSelected": true,
     "userName": "Jacob Jones",
     "phoneNumber": "+7(123)712-21-31",
     "emailID": "jacob.jones@gmail.com"
    },
    {
     "userID": 3,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)029-76-47",
     "emailID": "wade.warren@gmail.com"
    },
    {
     "userID": 4,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)072-36-61",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "userID": 5,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-69",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "userID": 6,
     "isSelected": false,
     "userName": "Guy Hawkins",
     "phoneNumber": "+7(123)029-76-75",
     "emailID": "guy.hawkins@gmail.com"
    },
    {
     "userID": 7,
     "isSelected": false,
     "userName": "Robert Fox",
     "phoneNumber": "+7(123)712-21-80",
     "emailID": "robert.fox@gmail.com"
    },
    {
     "userID": 8,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "wade.warren@gmail.com"
    },
    {
     "userID": 9,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)712-21-31",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "userID": 10,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "userID": 11,
     "isSelected": false,
     "userName": "Dianne Russell",
     "phoneNumber": "+7(123)029-76-47",
     "emailID": "dianne.russell@gmail.com"
    },
    {
     "userID": 12,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)072-36-61",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "userID": 13,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-69",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "userID": 14,
     "isSelected": false,
     "userName": "Guy Hawkins",
     "phoneNumber": "+7(123)029-76-75",
     "emailID": "guy.hawkins@gmail.com"
    },
    {
     "userID": 15,
     "isSelected": false,
     "userName": "Robert Fox",
     "phoneNumber": "+7(123)712-21-80",
     "emailID": "robert.fox@gmail.com"
    },
    {
     "userID": 16,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)712-21-28",
     "emailID": "wade.warren@gmail.com"
    }
   ]
   masterCheckBox : boolean = false;

  constructor(private toaster: ToasterService) {}

  ngOnInit(): void {
    this.toaster.success("Successfully Logged In","Login")
  }

  onDelete() {
    this.toaster.success("Record Deleted Successfully","Delete")
  }

  onMasterCheckBoxChange() {
    alert("Inside")
    this.users.forEach(user=>{
      user.isSelected = this.masterCheckBox
    })
  }

}
