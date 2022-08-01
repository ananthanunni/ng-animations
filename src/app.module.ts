import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { CustomStateComponent } from './components/custom-state/custom-state.component';
import { SimpleEnterLeaveComponent } from './components/simple-enter-leave/simple-enter-leave.component';
import { StaggerListComponent } from './components/stagger-list/stagger-list.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    SimpleEnterLeaveComponent,
    CustomStateComponent,
    StaggerListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
