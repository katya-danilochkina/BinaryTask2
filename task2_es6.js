class Fighter {
	constructor(name, power, health) {
		this.name = name;
		this.power = power;
		this.health = health;
	}
	

	setDamage(damage) {
      this.health = this.health - damage;
      console.log("health: " + this.health);
	}

	hit(enemy, point = 1) {
		const damage = point * this.power;
		enemy.setDamage(damage);
	}
}


class ImprovedFighter extends Fighter {
	doubleHit(enemy, point) {
	  super.hit(enemy, 2);
	}
}

