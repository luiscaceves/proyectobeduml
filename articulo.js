class Articulo {

    constructor(idart, name, grade) {
        // Propiedades de todos los articulos
        this.idart = idart;
        this.name = name;
        this.grade = grade;
    }

}

class Card extends Articulo {
    constructor(idart, name, grade, sport, team, year, brand, player, number){
    super(idart, name, grade);
    this.sport = sport;
    this.team = team;
    this.year = year;
    this.brand = brand;
    this.player = player;
    this.number = number;
    }
}

class Coin extends Articulo {
    constructor(idart, name, grade, country, year, denomination){
        super(idart, name, grade);
        this.country = country;
        this.year = year;
        this.denomination = denomination;
    }
}

class Jersey extends Articulo {
    constructor(idart, name, grade, sport, team, brand, year, number){
        super(idart, name, grade);
        this.sport = sport;
        this.team = team;
        this.brand = brand;
        this.year = year;
        this.number = number;
    }
}

class Perfume extends Articulo {
    constructor(idart, name, grade, brand, variant, notes){
        super(idart, name, grade);
        this.brand = brand;
        this.variant = variant;
        this.notes = notes;
    }
}