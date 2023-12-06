export interface Annonces {
  idAnnonce?: number ,
 price:number,
  desription: string,
  numberOfPlaces:number,
  images: string[],
  type  : "ROOM" | "BED";
}
