import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchString: string = "";

  constructor() {}

  onSearch(): void {
    this.search.emit(this.searchString);
  }
}
