/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {
  isSidebarOpen = true;
  isDropdownOpen = false;
  constructor(private router: Router) { }

   // Function to toggle the sidebar visibility
   openSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Function to toggle the dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ngOnInit() {
    // Ensure initial state if needed
    this.isDropdownOpen = false;
  }
  navigate(){
this.router.navigate(["/home/dashboard"])
  }

}
