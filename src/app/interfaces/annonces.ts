export interface Annonces {
  id?: number ,
  price:number,
  location:string,
  desription: string,
  numberOfPlaces:number,
  images: string[],
  type  : "ROOM" | "BED";
}
