import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { UsersResponse } from "src/app/models/users-response.model";
import { User } from "src/app/models/user.model";
import { Paging } from "src/app/models/paging.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.sass"]
})
export class UsersListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public users: User[];
  public paging: Paging = {
    current: 1,
    prev: null,
    next: 2,
    total: null
  };
  public loading: boolean = false;

  public turnPage(page: number): void {
    if (!page) return;

    this.dataService.cachedLastPage = page;

    if (this.dataService.cachedData[page]) {
      this.paging = this.dataService.cachedData[page].paging;
      this.users = this.dataService.cachedData[page].users;
      return;
    }

    this.loading = true;

    this.dataService.getUsers(page).subscribe((response: UsersResponse) => {
      this.processResponse(response);
    });
  }

  private processResponse(response: UsersResponse): void {
    this.users = response.data;
    this.generatePagingData(response);
    this.loading = false;
    this.cacheData(this.paging.current);
  }

  private generatePagingData(response: UsersResponse): void {
    this.paging = {
      current: response.page,
      prev: response.page === 1 ? null : response.page - 1,
      next: response.page === response.total_pages ? null : response.page + 1,
      total: response.total_pages
    };
  }

  // Caching function that stores all visited pages entirely
  private cacheData(page: number): void {
    this.dataService.cachedData[page] = {};
    this.dataService.cachedData[page].paging = this.paging;
    this.dataService.cachedData[page].users = this.users;
    console.log(this.dataService.cachedData);
  }

  ngOnInit() {
    if (this.dataService.cachedLastPage) {
      this.turnPage(this.dataService.cachedLastPage);
    } else {
      this.loading = true;
      this.dataService.getUsers().subscribe((response: UsersResponse) => {
        this.processResponse(response);
      });
    }
  }
}
