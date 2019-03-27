import {Coworker} from "./coworker.model";

export class WeeklyDutyTmp {
  public programLeader: number;
  public worshipLeader: number;
  public pianist: number;
  public chef: number;
  public cleaning1: number;
  public cleaning2: number;

  constructor(programLeader: number, worshipLeader: number, pianist: number, chef: number, cleaning1: number, cleaning2: number) {
    this.programLeader = programLeader;
    this.worshipLeader = worshipLeader;
    this.pianist = pianist;
    this.chef = chef;
    this.cleaning1 = cleaning1;
    this.cleaning2 = cleaning2;
  }
}
