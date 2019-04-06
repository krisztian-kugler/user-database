import { User } from "./user.model";

export interface UsersResponse {
  data: Array<User>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
