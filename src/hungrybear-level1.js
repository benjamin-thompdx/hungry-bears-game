import { returnStatement } from "@babel/types";

export class HungryBear1 {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 && this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
    this.moodLevel = 10;
  }
}