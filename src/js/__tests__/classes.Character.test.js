import Character from '../classes.Character';
import Bowman from '../classes.Bowman';
import Swordsman from '../classes.Swordsman';
import Magician from '../classes.Magician';
import Undead from '../classes.Undead';
import Zombie from '../classes.Zombie';
import Daemon from '../classes.Daemon';

test('Should be Bowman', () => {
  const bowman = new Bowman();
  expect(bowman.name).toBe('Bowman');
});

test('Should be Bowman with attack 25', () => {
  const bowman = new Bowman();
  expect(bowman.attack).toBe(25);
});

test('Should be Bowman with defence 25', () => {
  const bowman = new Bowman();
  expect(bowman.defence).toBe(25);
});

test('Should be Swordsman', () => {
  const swordsman = new Swordsman();
  expect(swordsman.name).toBe('Swordsman');
});

test('Should be Magician with attack 10', () => {
  const magician = new Magician();
  expect(magician.attack).toBe(10);
});

test('Should be Undead with defence 25', () => {
  const undead = new Undead();
  expect(undead.defence).toBe(25);
});

test('Should be Zombie', () => {
  const zombie = new Zombie();
  expect(zombie.name).toBe('Zombie');
});

test('Should be Daemon with defence 40', () => {
  const daemon = new Daemon();
  expect(daemon.defence).toBe(40);
});

test('Should create new Character', () => {
  class NewCharacter extends Character() {
    constructor() {
      super('NewCharacter', 500, 1000);
    }
  }
  const newCharacter = new NewCharacter();
  expect(newCharacter.name).toBe('NewCharacter');
});