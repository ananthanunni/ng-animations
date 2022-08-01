import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleEnterLeaveComponent } from './components/simple-enter-leave/simple-enter-leave.component';
import { StaggerListComponent } from './components/stagger-list/stagger-list.component';
import { AppComponent } from './main';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [AppComponent, SimpleEnterLeaveComponent, StaggerListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
