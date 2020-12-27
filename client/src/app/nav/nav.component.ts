import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  //loggedIn: boolean;
  //not a good practice to use logged in
  currentUser$:Observable<User>;

  constructor(public accountService: AccountService,private router:Router,
    private toastr: ToastrService) { }
  //made it public to acesss in html 
  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
  }

  login()
  {
   this.accountService.login(this.model).subscribe(response=>{
    this.router.navigateByUrl('/members');
   },error =>{
     console.log(error.error)
    this.toastr.error(error.error);
   });
  }
  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');//default
    //this.loggedIn=false;
    //this is not required any more since we use $currentUser
  }
  // getCurrentUser()
  // {
  //   this.accountService.currentUser$.subscribe(user=>
  //   {
  //        this.loggedIn=!!user
  //   },
  //   error=>{
  //       console.log(error);
  //   }
  //   );
  // }
  //not required any more

}
