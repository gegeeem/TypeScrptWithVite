export interface Vehicle {
  numberOfTyres: number;
  engineType?: string;
  battery: string;
  move: (speed: number) => void;
}
