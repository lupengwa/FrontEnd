import {Coworker} from "./coworker.model";

export class WeeklyDuty {
  public programLeader: Coworker;
  public worshipLeader: Coworker;
  public pianist: Coworker;
  public chef: Coworker;
  public cleaning1: Coworker;
  public cleaning2: Coworker;

  constructor() {
    this.programLeader = new Coworker();
    this.worshipLeader = new Coworker();
    this.pianist = new Coworker();
    this.chef = new Coworker();
    this.cleaning1 = new Coworker();
    this.cleaning2 = new Coworker();
  }

}
