import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  @Input() totalPage: number = 0;
  @Input() currentPage: number = 0;
  @Output() previousLoader = new EventEmitter<number>();
  @Output() nextLoader = new EventEmitter<number>();

  pages: number[] = [];
  currentPageToDisplay = 0;

  constructor() {}

  onPreviousLoad() {
    this.currentPageToDisplay--;
    if (this.currentPageToDisplay <= 0) {
      this.currentPageToDisplay = 1;
    }
    this.previousLoader.emit(this.currentPageToDisplay);
  }
  onNextLoad() {
    this.currentPageToDisplay++;
    if (this.currentPageToDisplay > this.totalPage) {
      this.currentPageToDisplay = this.totalPage;
    }
    this.nextLoader.emit(this.currentPageToDisplay);
  }

  generateTotalPage() {
    this.pages = [];
    for (let i = 0; i < this.totalPage; i++) {
      this.pages.push(i + 1);
    }
  }

  ngOnInit(): void {
    this.currentPageToDisplay = this.currentPage;
  }

  ngOnChanges(change: SimpleChanges) {
    if (change["totalPage"]) {
      this.generateTotalPage();
    }
  }
}
