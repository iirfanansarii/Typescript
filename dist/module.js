"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saloni = void 0;
class GrandParent {
    constructor(name) {
        this.name = name;
    }
}
// let ALbert: GrandParent = new GrandParent('saloni');
exports.Saloni = new GrandParent('saloni');
console.log('Hello', exports.Saloni.name);
