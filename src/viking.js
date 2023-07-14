// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (the_damage) => {
    this.health -= the_damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (the_damage) => {
    this.health -= the_damage;
    if (this.health > 0) {
      return `${this.name} has received ${the_damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {
    return "Odin Owns You All!";
  };
}

//battleCry

// Saxon
class Saxon extends Soldier {
  receiveDamage = (the_damage) => {
    this.health -= the_damage;
    if (this.health > 0) {
      return `A Saxon has received ${the_damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking = (Viking) => {
    this.vikingArmy.push(Viking);
    //console.log(this.vikingArmy)
  };

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  };
  vikingAttack = () => {
    const randomSaxon = Math.floor(Math.random()) * this.saxonArmy.length;
    const randomViking = Math.floor(Math.random()) * this.vikingArmy.length;

    //console.log(this.saxonArmy[randomSaxon].receiveDamage())

    //console.log( this.vikingArmy[0].strength)

    const call = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    if (this.saxonArmy[randomSaxon].health < 1) {
      this.saxonArmy.splice(randomSaxon, 1);
    } else {
    }

    return call;
  };
  saxonAttack = () => {
    const randomSaxon = Math.floor(Math.random()) * this.saxonArmy.length;
    const randomViking = Math.floor(Math.random()) * this.vikingArmy.length;

    //console.log(this.saxonArmy[randomSaxon].receiveDamage())

    //console.log( this.vikingArmy[0].strength)

    const call = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );

    if (this.vikingArmy[randomViking].health < 1) {
      this.vikingArmy.splice(randomViking, 1);
    } else {
    }

    return call;
  };
  showStatus() {
    //
    //            No se por que esto no acaba de funcionar pero ya es muy tarde
    //

    if (Saxon.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (Viking.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (Saxon.length >= 1 && Viking.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

 //
    //           Concept generic code for attacks
    //                   Ready for V2!!! XD

genericAttavk = (Attackers, Attackeds) => {
  const randomAttackers = Math.floor(Math.random()) * Attackers.length;
  const randomAttackeds = Math.floor(Math.random()) * Attackeds.length;

  //console.log(this.saxonArmy[randomSaxon].receiveDamage())

  //console.log( this.vikingArmy[0].strength)

  const call = Attackeds[Attackeds].receiveDamage(
    Attackers[randomAttackers].strength
  );

  if (Attackeds[randomAttackeds].health < 1) {
    Attackeds.splice(randomAttackeds, 1);
  } else {
  }

  return call;
};
