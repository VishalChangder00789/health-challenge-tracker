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

  // constructor(private userService: UserService) {}
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.pagedItems = this.tableData;
    this.setPage(1); // Initialize with first page of data : immedietly setting
  }

  ngOnChanges(change: SimpleChanges) {
    if (change["tableData"]) {
      this.setPage(1);
    }
  }

  setPage(page: number): void {
    this.currentPage = page; // 1
    const startIndex = (page - 1) * this.pageSize; // 0
    const endIndex = startIndex + this.pageSize; // 5
    this.pagedItems = this.tableData.slice(startIndex, endIndex); // 0 -4
    console.log(this.pagedItems);
    this.cdr.detectChanges(); // force state reload
    console.log(this.pagedItems);
  }

  pageChanged(event: any): void {
    console.log(event);
    this.currentPage = event;
    this.setPage(event);
  }
}
