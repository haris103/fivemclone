import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";



@NgModule({
  declarations:[SidebarComponent],
  exports:[SidebarComponent],
  imports:[
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ]
})

export class SharedmoduleModule { }
