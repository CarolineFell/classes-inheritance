// Реализуйте описанную иерархию классов:
// - класс Character является родительским для всех остальных,
// - 6 дочерних классов Bowerman, Swordsman, Magician, Daemon, Undead, Zombie
// от него наследуются, сами задавая свои характеристики.

// Реализуйте в классе Character метод levelUp, который работает следующим образом:
// На 1 повышает поле level;
// На 20% повышает показатели attack и defence;
// Приводит показатель health к значению 100.

// Метод должен работать только если показатель жизни не равен 0.
// В противном случае генерируется ошибка (нельзя повысить левел умершего).

export default class Character {
  constructor(name, attack, defence) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Character is dead. Level cannnot be upgraded');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}