// Реализуйте описанную иерархию классов:
// - класс Character является родительским для всех остальных,
// - 6 дочерних классов Bowerman, Swordsman, Magician, Daemon, Undead, Zombie
// от него наследуются, сами задавая свои характеристики.

// -------------------------------------------------------------------------------

// Реализуйте в классе Character метод levelUp, который работает следующим образом:
// На 1 повышает поле level;
// На 20% повышает показатели attack и defence;
// Приводит показатель health к значению 100.

// Метод должен работать только если показатель жизни не равен 0.
// В противном случае генерируется ошибка (нельзя повысить левел умершего).

// -------------------------------------------------------------------------------

// Задача: конкретному персонажу можно единожды включить режим powerMode.
// Что это значит? Показатели attack/defence/health персонажа увеличиваются вдвое,
// но ровно на три атаки.

// Реализуйте получение показателей attack/defence/health через get так, чтобы они учитывали
// включен ли режим powerMode. При этом powerMode тоже нужно реализовать через get/set так,
// чтобы включить его можно было только один раз.

export default class Character {
  constructor(name, attack, defence) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.level = 1;
    this.health = 100;
    this.powerMode = 'off';
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

//   set modePowerOn(powerMode) {
//     for (let i = 0; i < 1; i++) {
//       if (i === 0 && this.powerMode === 'on') {
//         this.attack *= 2;
//         this.defence *= 2;
//         this.health *= 2;
//         this.powerMode = powerMode;
//       } else {
//         throw new Error('Power mode has been spent');
//       }
//     }
//   }

//   get modePowerOn() {
//       return this.powerMode;
//   }