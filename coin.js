class Coin extends Articulo {
    constructor(idart, type, name, grade, country, year, denomination){
        super(idart, name, grade);
        this.country = country;
        this.year = year;
        this.denomination = denomination;
    }
}