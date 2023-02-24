import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [
    {
     "id": 1,
     "isSelected": false,
     "userName": "Dianne Russell",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "dianne.russell@gmail.com"
    },
    {
     "id": 2,
     "isSelected": false,
     "userName": "Jacob Jones",
     "phoneNumber": "+7(123)712-21-31",
     "emailID": "jacob.jones@gmail.com"
    },
    {
     "id": 3,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)029-76-47",
     "emailID": "wade.warren@gmail.com"
    },
    {
     "id": 4,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)072-36-61",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "id": 5,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-69",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "id": 6,
     "isSelected": false,
     "userName": "Guy Hawkins",
     "phoneNumber": "+7(123)029-76-75",
     "emailID": "guy.hawkins@gmail.com"
    },
    {
     "id": 7,
     "isSelected": false,
     "userName": "Robert Fox",
     "phoneNumber": "+7(123)712-21-80",
     "emailID": "robert.fox@gmail.com"
    },
    {
     "id": 8,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "wade.warren@gmail.com"
    },
    {
     "id": 9,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)712-21-31",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "id": 10,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-28",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "id": 11,
     "isSelected": false,
     "userName": "Dianne Russell",
     "phoneNumber": "+7(123)029-76-47",
     "emailID": "dianne.russell@gmail.com"
    },
    {
     "id": 12,
     "isSelected": false,
     "userName": "Bessie Cooper",
     "phoneNumber": "+7(123)072-36-61",
     "emailID": "bessie.cooper@gmail.com"
    },
    {
     "id": 13,
     "isSelected": false,
     "userName": "Leslie Alexander",
     "phoneNumber": "+7(123)072-36-69",
     "emailID": "lesile.alexander@gmail.com"
    },
    {
     "id": 14,
     "isSelected": false,
     "userName": "Guy Hawkins",
     "phoneNumber": "+7(123)029-76-75",
     "emailID": "guy.hawkins@gmail.com"
    },
    {
     "id": 15,
     "isSelected": false,
     "userName": "Robert Fox",
     "phoneNumber": "+7(123)712-21-80",
     "emailID": "robert.fox@gmail.com"
    },
    {
     "id": 16,
     "isSelected": false,
     "userName": "Wade Warren",
     "phoneNumber": "+7(123)712-21-28",
     "emailID": "wade.warren@gmail.com"
    }
   ]
   masterCheckBox : boolean = false;
   isAtleastOneUserSelected : boolean = false;
  constructor(private toaster: ToasterService) {}

  ngOnInit(): void {
    this.toaster.success("Successfully Logged In","Login")
  }

  onMasterDelete() {
    let selectedUsers = this.users.filter(user=> user.isSelected==true)
    selectedUsers.forEach(item=> {
      this.users.splice(this.users.findIndex(user=> user.id==item.id),1)
    })
    this.toaster.success("Records Deleted Successfully","Delete")
  }

  onMasterCheckBoxChange() {
    this.users.forEach(user=>{
      user.isSelected = this.masterCheckBox
    })
    this.onUserSelectionChange();
  }

  onDeleteUser(userId: number) {
    const userIndex = this.users.findIndex(user=> user.id == userId)
    this.users.splice(userIndex,1);
    this.toaster.success("Record Deleted Successfully","Delete")
  }

  onUserSelectionChange() {
    this.isAtleastOneUserSelected = this.users.findIndex(user=> user.isSelected==true) >= 0 ? true : false;
  }
}

export interface User {
  id: number
  isSelected : boolean
  userName : string
  phoneNumber : string
  emailID : string
}
