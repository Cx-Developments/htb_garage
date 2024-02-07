export interface Vehicle {
  type: string;
  plate: string;
  displayName: string;
  modelName: string;
  spawnName: string;
  import: string;
  pound: boolean;
  stored: boolean;
  htmlId: string;

  fuel: number;
  engine: number;
  body: number;
};

export interface Player {

};

export interface GarageStore {
  isVisible: boolean;

  vehicles: Vehicle[];

  showFuel: boolean;
  showEngine: boolean;
  showBody: boolean;

  nearbyPlayers: Player[];
};
