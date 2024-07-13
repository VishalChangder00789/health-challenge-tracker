import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { __values } from "tslib";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  name: string = "";
  type: string = "";
  minutes: number = 0;

  constructor(private userService: UserService) {}

  ifUserExists(users: any[], name: string): boolean {
    return users.some((user) => user.name === name);
  }

  onSubmit(): void {
    if (!this.name || !this.type || !this.minutes) {
      console.log("Missing Items", this.name, this.type, this.minutes);
      return;
    }

    // search user
    let Users = this.userService.getUserData().value;
    let userIndex = this.ifUserExists(Users, this.name);

    if (userIndex !== false) {
      // User exists, update the workouts
      let index = Users.findIndex((user) => user.name === this.name);
      const existingUser = Users[index];
      existingUser.workouts.push({ type: this.type, minutes: this.minutes });
      this.userService.updateUser(index, existingUser);
    } else {
      // if there is no existing user , searched through name
      let nextId = this.userService.getUserData().value.length + 1;
      const workouts = [];
      workouts.push({ type: this.type, minutes: this.minutes });
      const user = { id: nextId, name: this.name, workouts };

      this.userService.addUser(user);

      this.name = "";
      this.type = "";
      this.minutes = 0;
    }
  }

  onOptionSelected(option: string): void {
    this.type = option;
  }
}
