import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should check username as Dianne Russell',(done)=>{
  //   service.getUsers().subscribe({
  //     next: (data: any)=>{
  //       expect(data[0].userName)
  //       done();
  //     },
  //     error: (error: any)=>{
  //       done();
  //      }
  //   })
  //   // service.getUsers().subscribe((result:any)=>{
  //   //   expect(result[0].userName).toBe("Dianne Russell")
  //   //   done();
  //   // },(error: any)=>{
  //   //   console.log(error);
  //   //   done();
  //   // })
  // })
});
