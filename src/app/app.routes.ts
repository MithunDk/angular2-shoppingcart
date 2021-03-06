import { RouterModule,Route} from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ABOUT_ROUTING } from './components/products/aboutroutings';

const routes: Route[] = [
 { path: "" , component: LoginComponent },
 { path: "signout" , component: LoginComponent},
 { path: "products", component: ProductsComponent, children:ABOUT_ROUTING},
 { path: "proceed", component: ProceedComponent},
 { path: "about",  component : AboutComponent},
 { path: "checkout" , component : ProceedComponent }
]

export const RoutesProvider = RouterModule.forRoot(routes);