import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserCardComponent } from "./components/users-list/user-card/user-card.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { SpinnerComponent } from "./components/users-list/spinner/spinner.component";

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, UsersListComponent, UserCardComponent, UserDetailsComponent, SpinnerComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
