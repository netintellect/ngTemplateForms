export class Hero {
  //#region state
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {};
  //#endregion
}
