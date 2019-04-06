import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SingleUserResponse } from "src/app/models/single-user-response.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.sass"]
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  public user: User;

  public back(): void {
    this.router.navigate(["/users"]);
  }

  ngOnInit() {
    this.dataService.cachedUser.subscribe((user: User) => {
      if (user) {
        this.user = user;
      } else {
        this.route.params.subscribe((params: Params) => {
          this.dataService.getSingleUser(Number(params["id"])).subscribe((response: SingleUserResponse) => {
            this.user = response.data;
          });
        });
      }
    });
  }
}
