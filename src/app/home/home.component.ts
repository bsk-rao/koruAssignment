import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import {trigger, transition, style, animate} from '@angular/animations'
import { Observable } from 'rxjs'
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { UserService } from '../services/user.service';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('leaveAnimation', [
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1000ms', style({ transform: 'translateX(10%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  users: User[] = []
  isDataLoaded: boolean = false;
  masterCheckBox: boolean = false;
  isAtleastOneUserSelected: boolean = false;
  isTable: boolean = true;
  noDataMessage : string = ''
  deleteUserO: Observable<any> | undefined;
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

  constructor(private toaster: ToasterService, private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result:any)=>{
      this.isDataLoaded = true;
      this.users = result;
    }, (error)=>{
      console.log(error)
      this.noDataMessage = "OOOPS! JSON-SERVER is not running"
    })
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

  onDeleteUser(userId: number) {
    this.deleteUserO = new Observable((observable) => {
      const userIndex = this.users.findIndex((user) => user.id == userId);
      this.users.splice(userIndex, 1);
      observable.next('success');
    });
  }

  onMasterCheckBoxChange() {
    this.users.forEach((user) => {
      user.isSelected = this.masterCheckBox;
      this.onUserSelectionChange();
    });
  }

  onDeleteConfirmation() {
    this.deleteUserO?.subscribe((result) => {
      if (result == 'success') {
        if(this.users.length==0) {
          this.noDataMessage = "OOOPS! All Records Deleted";
        }
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
  onDrop(event: any) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
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

