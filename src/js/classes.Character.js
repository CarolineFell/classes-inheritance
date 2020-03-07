// Реализуйте описанную иерархию классов:
// - класс Character является родительским для всех остальных,
// - 6 дочерних классов Bowerman, Swordsman, Magician, Daemon, Undead, Zombie
// от него наследуются, сами задавая свои характеристики.

export default class Character {
  constructor(name, attack, defence) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
  }
}