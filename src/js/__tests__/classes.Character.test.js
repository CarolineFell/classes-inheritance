import Bowman from '../classes.Bowman';
import Swordsman from '../classes.Swordsman';
import Magician from '../classes.Magician';
import Undead from '../classes.Undead';
import Zombie from '../classes.Zombie';
import Daemon from '../classes.Daemon';

test('Should be Bowman', () => {
  const bowman = new Bowman();
  expect(bowman).toEqual({
    name: 'Bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
  });
});

test('Should be Swordsman', () => {
  const swordsman = new Swordsman();
  expect(swordsman).toEqual({
    name: 'Swordsman',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
  });
});

test('Should be Magician', () => {
  const magician = new Magician();
  expect(magician).toEqual({
    name: 'Magician',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100,
  });
});

test('Should be Undead', () => {
  const undead = new Undead();
  expect(undead).toEqual({
    name: 'Undead',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
  });
});

test('Should be Zombie', () => {
  const zombie = new Zombie();
  expect(zombie).toEqual({
    name: 'Zombie',
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
  });
});

test('Should be Daemon', () => {
  const daemon = new Daemon();
  expect(daemon).toEqual({
    name: 'Daemon',
    attack: 10,
    defence: 40,
    level: 1,
    health: 100,
  });
});

test('levelUp a Bowman - level 2', () => {
  const bowman = new Bowman();
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'Bowman',
    attack: 30,
    defence: 30,
    level: 2,
    health: 100,
  });
});

test('levelUp a Magician - level 6', () => {
  const magician = new Magician();
  magician.level = 5;
  magician.levelUp();
  expect(magician).toEqual({
    name: 'Magician',
    attack: 12,
    defence: 48,
    level: 6,
    health: 100,
  });
});

test('Should throw Error', () => {
  const undead = new Undead();
  undead.health = 0;
  expect(() => undead.levelUp()).toThrow('Character is dead. Level cannnot be upgraded');
});