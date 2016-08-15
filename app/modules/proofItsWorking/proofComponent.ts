export class ProofController {
  message: string;

  constructor() {
    this.message = "This thing actually works!";
  }
}

export default class ProofComponent /* extends ng.IComponentOptions? */ {
  static NAME: string = "proofComponent";
  template:string = "<div><p>{{ $ctrl.message || 'no text?' }}</p></div>";
  // template:string = "<div><p>Testing</p></div>";
  controller: any = ProofController;
}