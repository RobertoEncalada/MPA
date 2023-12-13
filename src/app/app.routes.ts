import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';
import { PortfolioOverviewComponent } from './pages/portfolio-overview/portfolio-overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
export const routes: Routes = [ 
    { path: 'index', component: IndexComponent },
    { path: "**", redirectTo: "index"},
    { path: 'about', component: AboutComponent },
    { path: 'portfolio-item', component: PortfolioItemComponent },
    { path: 'portfolio-overview', component: PortfolioOverviewComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pricing', component: PricingComponent}
];
