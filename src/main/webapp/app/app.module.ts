import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { XaimelSharedModule } from 'app/shared/shared.module';
import { XaimelCoreModule } from 'app/core/core.module';
import { XaimelAppRoutingModule } from './app-routing.module';
import { XaimelHomeModule } from './home/home.module';
import { XaimelEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    XaimelSharedModule,
    XaimelCoreModule,
    XaimelHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    XaimelEntityModule,
    XaimelAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class XaimelAppModule {}
