class GrandParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// let ALbert: GrandParent = new GrandParent('saloni');
export const Saloni = new GrandParent('saloni');
console.log('Hello', Saloni.name);
