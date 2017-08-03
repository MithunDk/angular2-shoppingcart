import{ AboutComponent } from '../about/about.component';
import { ProceedComponent } from '../proceed/proceed.component';
import { Routes } from '@angular/router';

export const ABOUT_ROUTING : Routes =[
    {path:'about',component: AboutComponent},
    {path:'proceed',component: ProceedComponent}
]