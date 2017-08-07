import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";

@Component({
  moduleId: module.id,
  selector: "hero-form",
  templateUrl: "hero-form.component.html"
})

export class HeroFormComponent implements OnInit {
  //#region state
  public powers: string[] = [
    "Really smart", "Super flexible", "Super hot", "Weather changer"
  ];
  public model: Hero;
  public isSubmitted = false;
  //#endregion

  //#region behavior
  constructor() {
    this.model = new Hero(18, "Dr IQ", this.powers[0], "Chuck overstreet");
  }

  public onSubmit(): void {
    this.isSubmitted = true;
  }

  ngOnInit() {
  }

  public newHero(): void {
    this.model = new Hero(0, "", "", null);
  }

  public get diagnostic() {
    return JSON.stringify(this.model);
  }
  //#endregion
}
