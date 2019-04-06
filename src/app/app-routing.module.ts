import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersListComponent
  },
  {
    path: "users/:id",
    component: UserDetailsComponent
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
