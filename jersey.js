class Jersey extends Articulo {
    constructor(idart, type, name, grade, sport, team, brand, year, number){
        super(idart, type, name, grade);
        this.sport = sport;
        this.team = team;
        this.brand = brand;
        this.year = year;
        this.number = number;
    }
}