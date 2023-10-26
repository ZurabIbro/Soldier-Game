//создали объект солдат с информацией персонажа
const soldier = {
    name: "host",
    health: 1,
    weapon: {
        weaponName: "Piuw-gun",
        ammo: 30
    },
    supplies: 3,
//Метод стрельбы
    shoot: function () {
        if (this.weapon.ammo == 0) {
            console.log('обойма пуста. Перезаредитесь');
        } else {
            console.log("Piew-Piew");
            this.weapon.ammo--;
        }
    },
//Метод для перезарядки
    reload: function () {
        if (this.supplies == 0) {
            console.log('не осталось припасов');
        } else {
            this.weapon.ammo == 30;
            this.supplies--;
            console.log('перезарядка..');
        }
    },
    //Метод ранен
    hurt: function () {
        this.health--
        if (this.health == 0) {
            console.log("you Dead niGGr");
        }
    }
}

//вызываем методы объекта
soldier.shoot();
soldier.reload();
soldier.hurt();
