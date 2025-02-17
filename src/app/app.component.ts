import {
  Component,
  ViewEncapsulation,
  OnInit,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "health-challenge-tracker";
  showCaseData: any[] = [];
  filteredData: any[] = [];
  searchString = "";
  filterOption = "";

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((data) => {
      this.showCaseData = data;
      this.applyFilters(); // Apply filters to update filteredData
    });
  }

  onSearch(term: string): void {
    this.searchString = term;
    this.applyFilters();
  }

  onOptionSelected(option: string): void {
    this.filterOption = option;
    this.applyFilters();
  }

  applyFilters(): void {
    let data = this.showCaseData;

    if (this.searchString) {
      data = data.filter((user) =>
        user.name.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }

    if (this.filterOption) {
      data = data.filter((user) =>
        user.workouts.some(
          (workout: { type: string }) =>
            workout.type.toLowerCase() === this.filterOption.toLowerCase()
        )
      );
    }

    this.filteredData = [...data];
    // console.log("Filtered Data", this.filteredData);
  }
}
