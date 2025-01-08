import { EventName } from "./types";

export class EventCancelled extends Error {
  constructor(public eventName: EventName) {
    super(`Event ${eventName} was cancelled`);
    this.name = "EventCancelled";
  }
}
