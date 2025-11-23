export type EquipmentId = "AC" | "automatic" | "kitchen" | "TV" | "bathroom";
export type VehicleTypeId = "panelTruck" | "fullyIntegrated" | "alcove";

export interface FiltersState {
  location: string;
  equipment: EquipmentId[];
  type: VehicleTypeId | "";
  transmission: "automatic" | "manual";
}
