/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  dataParam = 'profile'
  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.params.subscribe((params)=>{
       this.dataParam = params['data'];

    })
  }

}
