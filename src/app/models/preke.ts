export class Preke {
  public pavadinimas: string;
  private _kiekis: number = 0;
  public kaina: number;
  public image: string;
  public nuolaida: boolean;

  public constructor(
    pavadinimas: string,
    kaina: number,
    image: string,
    nuolaida: boolean
  ) {
    this.pavadinimas = pavadinimas;
    this.kaina = kaina;
    this.image = image;
    this.nuolaida = nuolaida;
  }

  public pridetiKieki(): void {
    this._kiekis++;
  }

  public atimtiKieki(): void {
    this._kiekis--;
  }

  public get kiekis(): number {
    return this._kiekis;
  }
}
