import { create } from "zustand";
import {
  FiltersState,
  EquipmentId,
  VehicleTypeId,
} from "@/lib/types/filtersTypes";

interface FiltersActions {
  setLocation: (value: string) => void;
  toggleEquipment: (id: EquipmentId) => void;
  setType: (value: VehicleTypeId) => void;
  clearFilters: () => void;
  setTransmission: (value: "automatic" | "manual") => void;
}

export const useFiltersStore = create<FiltersState & FiltersActions>((set) => ({
  location: "",
  equipment: [],
  type: "",
  transmission: "manual",

  setLocation: (value) => set({ location: value }),
  toggleEquipment: (id) =>
    set((state) => {
      const exists = state.equipment.includes(id);
      return {
        equipment: exists
          ? state.equipment.filter((item) => item !== id)
          : [...state.equipment, id],
      };
    }),
  setType: (value) => set({ type: value }),
  clearFilters: () =>
    set({ location: "", type: "", equipment: [], transmission: "manual" }),
  setTransmission: (value) => set({ transmission: value }),
}));
