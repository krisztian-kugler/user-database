import { Component, Input, HostListener } from "@angular/core";
import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.sass"]
})
export class UserCardComponent {
  constructor(private router: Router, private dataService: DataService) {}

  @Input() user: User;

  @HostListener("click") onClickCard(): void {
    this.dataService.cachedUser.next(this.user);
    this.router.navigate([`/users/${this.user.id}`]);
  }
}
