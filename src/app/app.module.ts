import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutesProvider } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { ModalModule} from 'ng2-modal'


import { AppComponent } from './app.component';
import { SERVICES } from './services';
import { COMPONENTS } from './components';
import { ACTIONS} from './store/actions';
import { reducer } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider,
    StoreModule.provideStore(reducer),
    ModalModule,
  ],
  providers: [ SERVICES,ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }
