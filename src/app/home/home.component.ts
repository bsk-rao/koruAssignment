import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import {trigger, transition, style, animate} from '@angular/animations'
import {  observable, Observable } from 'rxjs'
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('leaveAnimation', [
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('2000ms', style({ transform: 'translateX(10%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      isSelected: false,
      userName: 'Dianne Russell',
      phoneNumber: '+7(123)072-36-28',
      emailID: 'dianne.russell@gmail.com',
    },
    {
      id: 2,
      isSelected: false,
      userName: 'Jacob Jones',
      phoneNumber: '+7(123)712-21-31',
      emailID: 'jacob.jones@gmail.com',
    },
    {
      id: 3,
      isSelected: false,
      userName: 'Wade Warren',
      phoneNumber: '+7(123)029-76-47',
      emailID: 'wade.warren@gmail.com',
    },
    {
      id: 4,
      isSelected: false,
      userName: 'Bessie Cooper',
      phoneNumber: '+7(123)072-36-61',
      emailID: 'bessie.cooper@gmail.com',
    },
    {
      id: 5,
      isSelected: false,
      userName: 'Leslie Alexander',
      phoneNumber: '+7(123)072-36-69',
      emailID: 'lesile.alexander@gmail.com',
    },
    {
      id: 6,
      isSelected: false,
      userName: 'Guy Hawkins',
      phoneNumber: '+7(123)029-76-75',
      emailID: 'guy.hawkins@gmail.com',
    },
    {
      id: 7,
      isSelected: false,
      userName: 'Robert Fox',
      phoneNumber: '+7(123)712-21-80',
      emailID: 'robert.fox@gmail.com',
    },
    {
      id: 8,
      isSelected: false,
      userName: 'Wade Warren',
      phoneNumber: '+7(123)072-36-28',
      emailID: 'wade.warren@gmail.com',
    },
    {
      id: 9,
      isSelected: false,
      userName: 'Bessie Cooper',
      phoneNumber: '+7(123)712-21-31',
      emailID: 'bessie.cooper@gmail.com',
    },
    {
      id: 10,
      isSelected: false,
      userName: 'Leslie Alexander',
      phoneNumber: '+7(123)072-36-28',
      emailID: 'lesile.alexander@gmail.com',
    },
    {
      id: 11,
      isSelected: false,
      userName: 'Dianne Russell',
      phoneNumber: '+7(123)029-76-47',
      emailID: 'dianne.russell@gmail.com',
    },
    {
      id: 12,
      isSelected: false,
      userName: 'Bessie Cooper',
      phoneNumber: '+7(123)072-36-61',
      emailID: 'bessie.cooper@gmail.com',
    },
    {
      id: 13,
      isSelected: false,
      userName: 'Leslie Alexander',
      phoneNumber: '+7(123)072-36-69',
      emailID: 'lesile.alexander@gmail.com',
    },
    {
      id: 14,
      isSelected: false,
      userName: 'Guy Hawkins',
      phoneNumber: '+7(123)029-76-75',
      emailID: 'guy.hawkins@gmail.com',
    },
    {
      id: 15,
      isSelected: false,
      userName: 'Robert Fox',
      phoneNumber: '+7(123)712-21-80',
      emailID: 'robert.fox@gmail.com',
    },
    {
      id: 16,
      isSelected: false,
      userName: 'Wade Warren',
      phoneNumber: '+7(123)712-21-28',
      emailID: 'wade.warren@gmail.com',
    },
  ];
  masterCheckBox: boolean = false;
  isAtleastOneUserSelected: boolean = false;
  isTable: boolean = true;
  tableHeaders: TableHeader[] = [
    {
      name: 'User Name',
      propName: 'userName',
      sortIcon: FlatSortIcon.none,
    },
    {
      name: 'Phone Number',
      propName: 'phoneNumber',
      sortIcon: FlatSortIcon.none,
    },
    {
      name: 'Email ID',
      propName: 'emailID',
      sortIcon: FlatSortIcon.none,
    },
  ];

  constructor(private toaster: ToasterService) {}

  ngOnInit(): void {
    this.toaster.success('Successfully Logged In', 'Login');
  }

  ngAfterViewInit() {
    const tooltipTriggerList: any = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  onMasterDelete() {
    this.deleteUserO = new Observable((observable) => {
      let selectedUsers = this.users.filter((user) => user.isSelected == true);
      selectedUsers.forEach((item) => {
        this.users.splice(
          this.users.findIndex((user) => user.id == item.id),
          1
        );
      });
      this.toaster.success('Records Deleted Successfully', 'Delete');
      this.isAtleastOneUserSelected = false;
      observable.next('success');
    });
  }

  deleteUserO: Observable<any> | undefined;

  onMasterCheckBoxChange() {
    this.users.forEach((user) => {
      user.isSelected = this.masterCheckBox;
      this.onUserSelectionChange();
    });
  }

  onDeleteUser(userId: number) {
    this.deleteUserO = new Observable((observable) => {
      const userIndex = this.users.findIndex((user) => user.id == userId);
      this.users.splice(userIndex, 1);
      observable.next('success');
    });
  }

  onDeleteConfirmation() {
    this.deleteUserO?.subscribe((result) => {
      if (result == 'success') {
        this.toaster.success('Records Deleted Successfully', 'Delete');
      }
    });
  }

  onUserSelectionChange() {
    this.isAtleastOneUserSelected =
      this.users.findIndex((user) => user.isSelected == true) >= 0
        ? true
        : false;
  }

  onColumnSortChange(currentHeader: TableHeader) {
    //Changing SortIcons for otherHeaders to default
    this.tableHeaders.forEach((header) => {
      if (header.name != currentHeader.name) {
        header.sortIcon = FlatSortIcon.none;
      }
    });

    //Changing SortIcon for currentHeader
    if (currentHeader.sortIcon === FlatSortIcon.none) {
      currentHeader.sortIcon = FlatSortIcon.ascending;
    } else if (currentHeader.sortIcon === FlatSortIcon.ascending) {
      currentHeader.sortIcon = FlatSortIcon.descending;
    } else currentHeader.sortIcon = FlatSortIcon.ascending;

    //Actual Sorting based on currentHeader
    const column = currentHeader.propName as keyof User;
    if (currentHeader.sortIcon == FlatSortIcon.ascending) {
      this.users.sort((a, b) => {
        return a[column] > b[column] ? 1 : -1;
      });
    } else if (currentHeader.sortIcon == FlatSortIcon.descending) {
      this.users.sort((a, b) => {
        return a[column] < b[column] ? 1 : -1;
      });
    }
  }
}

export interface User {
  id: number
  isSelected : boolean
  userName : string
  phoneNumber : string
  emailID : string
}

export interface TableHeader {
  name : string
  propName: string
  sortIcon: string
}

export enum FlatSortIcon {
  none = 'fi fi-sr-sort',
  ascending = 'fi fi-rr-sort-amount-down-alt',
  descending = 'fi fi-rr-sort-amount-up-alt'
}

