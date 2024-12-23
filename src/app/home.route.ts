import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { SpacesNearComponent } from "./Components/spaces-near/spaces-near.component";
import { PaymentPrevComponent } from "./payment-prev/payment-prev.component";
import { PaymentComponent } from "./Components/payment/payment.component";
import { SpaceComponent } from "./Components/space/space.component";

export const homeRoutes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'addspace',
        component:SpaceComponent
    },
    {
        path:'space-near',
        component:SpacesNearComponent
    },
    {
        path:'payment-prev',
        component:PaymentPrevComponent
    },
    {
        path:'payment',
        component:PaymentComponent
    }
]