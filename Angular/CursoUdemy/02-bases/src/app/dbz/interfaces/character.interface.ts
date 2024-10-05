export interface Character {
  name: string;
  power: number;
}

export interface FinalCharacter extends Character {
  id: string;
}
