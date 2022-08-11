import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { ComplexContainerComponent } from './components/complex-container/complex-container.component';
import { QueryGroupComplexComponent } from './components/complex-container/query-group-complex/query-group-complex.component';
import { StaggeredListComponent } from './components/complex-container/staggered-list/staggered-list.component';
import { CardTransitionsComponent } from './components/custom-state-container/card-transitions/card-transitions.component';
import { CustomStateContainerComponent } from './components/custom-state-container/custom-state-container.component';
import { TrafficLightsComponent } from './components/custom-state-container/traffic-lights/traffic-lights.component';
import { SimpleEnterLeaveComponent } from './components/simple-enter-leave/simple-enter-leave.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    SimpleEnterLeaveComponent,
    CustomStateContainerComponent,
    CardTransitionsComponent,
    TrafficLightsComponent,
    ComplexContainerComponent,
    StaggeredListComponent,
    QueryGroupComplexComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
