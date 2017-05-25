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
	doubleHit(enemy, point = 1) {
	  super.hit(enemy, 2 * point);
	}
}

function fight(fighter, improvedFighter, ...points) {
	let i =0;
	while(i < points.length && fighter.health > 0 && improvedFighter.health > 0) {
		fighter.hit(improvedFighter, points[i]);
		improvedFighter.doubleHit(fighter, points[i])
		i++;
	}

	if (fighter.health <= 0) {
		if (improvedFighter.health <= 0) {
			console.log("Even");
		} else {
			console.log("Improved Fighter Wins");
		}
	} else {
		console.log("Fighter Wins");
	}
}
