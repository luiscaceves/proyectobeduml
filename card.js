class Card extends Articulo {
    constructor(idart, type, name, grade, sport, team, year, brand, player, number){
    super(idart, type, name, grade);
    this.sport = sport;
    this.team = team;
    this.year = year;
    this.brand = brand;
    this.player = player;
    this.number = number;
    }
}