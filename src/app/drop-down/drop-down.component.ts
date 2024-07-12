import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"],
})
export class DropDownComponent {
  // Component will be receiving this
  @Input() options: string[] = [];

  // This will be emitted out to the parent
  @Output() emitSelectedOption: EventEmitter<string> =
    new EventEmitter<string>();

  // variables
  isOpen = false;
  selectedOption: string | undefined;

  constructor() {}

  onDropdownActivate() {
    this.isOpen = !this.isOpen;
  }

  onSelect(option: string): void {
    this.selectedOption = option;
    this.isOpen = !this.isOpen;
    this.emitSelectedOption.emit(this.selectedOption);
  }
}
