import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSidenavComponent } from './components/page-sidenav/page-sidenav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSidenavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,MaterialModule,RouterModule
  ],
  exports:[CommonModule,MaterialModule,PageHeaderComponent,
    PageFooterComponent,RouterModule,PageNotFoundComponent,PageSidenavComponent]
})
export class SharedModule { }
