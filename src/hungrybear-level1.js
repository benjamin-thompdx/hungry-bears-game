import { returnStatement } from "@babel/types";

export class HungryBear1 {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      console.log("You've been eaten, try again!");
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}