import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userData = [
    {
      id: 1,
      name: "John Doe",
      workouts: [
        { type: "Running", minutes: 30 },
        { type: "Cycling", minutes: 45 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      workouts: [
        { type: "Swimming", minutes: 60 },
        { type: "Running", minutes: 20 },
      ],
    },
    {
      id: 3,
      name: "Mike Johnson",
      workouts: [
        { type: "Yoga", minutes: 50 },
        { type: "Cycling", minutes: 40 },
      ],
    },
  ];

  private userDataSubject = new BehaviorSubject<any[]>(this.userData);

  constructor() {}

  getUserData(): BehaviorSubject<any[]> {
    return this.userDataSubject;
  }

  addUser(newUser: any): void {
    this.userData.push(newUser); // Add new user to userData array
    this.userDataSubject.next([...this.userData]); // Notify subscribers with updated data
  }

  updateUser(index: number, user: any): void {
    const currentUsers = this.userDataSubject.value;
    currentUsers[index] = user;
    this.userDataSubject.next(currentUsers);
  }
}
