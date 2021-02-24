class Perfume extends Articulo {
    constructor(idart, type, name, grade, brand, variant, notes){
        super(idart, type, name, grade);
        this.brand = brand;
        this.variant = variant;
        this.notes = notes;
    }
}