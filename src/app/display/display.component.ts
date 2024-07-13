import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
  // Recievin tableDaata

  @Input() tableData: any[] = [];

  // Assuming this is where your data will be stored
  pagedItems: any[] = [];
  currentPage = 1;
  pageSize = 5; // Number of items per page
  totalPage = 0;

  // constructor(private userService: UserService) {}
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.pagedItems = this.tableData;
    this.setPage(1); // Initialize with first page of data : immedietly setting
    this.totalPage = this.tableData.length / this.pageSize;
  }

  // For filtering and searching
  ngOnChanges(change: SimpleChanges) {
    if (change["tableData"]) {
      this.setPage(1);
      this.totalPage = Math.ceil(this.tableData.length / this.pageSize);
    }

    this.userService.getUserData().subscribe((user) => {
      this.tableData = user;
    });
  }

  public setPage(page: number): void {
    this.currentPage = page; // 1
    const startIndex = (page - 1) * this.pageSize; // 0
    const endIndex = startIndex + this.pageSize; // 5
    let changingData = this.tableData.slice(startIndex, endIndex);
    this.pagedItems = [...changingData]; // 0 -4
  }

  pageChanged(event: any): void {
    this.currentPage = event;
    this.setPage(event);
  }

  onPreviousPageChange(currentpage: number): void {
    this.currentPage = currentpage;
    // console.log(this.currentPage);
    this.setPage(currentpage);
  }

  onNextPageChange(currentpage: number): void {
    this.currentPage = currentpage;
    // console.log(this.currentPage);

    this.setPage(currentpage);
  }

  getTotalWorkouts(workouts: any) {
    return workouts.length;
  }
  getTotalWorkoutMinutes(workout: any): Number {
    let minutes = 0;
    for (let i = 0; i < workout.length; i++) {
      minutes += workout[i].minutes;
    }

    return minutes;
  }
}
