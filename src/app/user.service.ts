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
    {
      id: 4,
      name: "Emily Brown",
      workouts: [
        { type: "Pilates", minutes: 45 },
        { type: "Walking", minutes: 30 },
      ],
    },
    {
      id: 5,
      name: "David Lee",
      workouts: [
        { type: "Weightlifting", minutes: 60 },
        { type: "Swimming", minutes: 45 },
      ],
    },
    {
      id: 6,
      name: "Sophia Garcia",
      workouts: [
        { type: "Running", minutes: 40 },
        { type: "Yoga", minutes: 60 },
      ],
    },
    {
      id: 7,
      name: "Michael Anderson",
      workouts: [
        { type: "Cycling", minutes: 55 },
        { type: "Running", minutes: 25 },
      ],
    },
    {
      id: 8,
      name: "Emma Wilson",
      workouts: [
        { type: "Swimming", minutes: 70 },
        { type: "Yoga", minutes: 40 },
      ],
    },
    {
      id: 9,
      name: "Daniel Martinez",
      workouts: [
        { type: "CrossFit", minutes: 60 },
        { type: "Cycling", minutes: 45 },
      ],
    },
    {
      id: 10,
      name: "Daniel Martinez",
      workouts: [
        { type: "CrossFit", minutes: 60 },
        { type: "Cycling", minutes: 45 },
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
    console.log(this.userData);
  }

  updateUser(index: number, user: any): void {
    const currentUsers = this.userDataSubject.value;
    currentUsers[index] = user;
    this.userDataSubject.next(currentUsers);
  }
}
