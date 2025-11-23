import { create } from "zustand";
import { Camper, Data } from "../api/api";

interface CampersState {
  campers: Camper[];
  total: number;
  loading: boolean;
  error: string | null;
  setCampers: (data: Data) => void;
  appendCampers: (data: Data) => void;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
  clearCampers: () => void;
}

export const useCampersStore = create<CampersState>((set) => ({
  campers: [],
  total: 0,
  loading: false,
  error: null,

  setCampers: (data) =>
    set({
      campers: data.items,
      total: data.total,
      loading: false,
      error: null,
    }),

  appendCampers: (data) =>
    set((state) => {
      const allCampers = [...state.campers, ...data.items];
      const uniqueCampers = Array.from(
        new Map(allCampers.map((c) => [c.id, c])).values()
      );
      return {
        campers: uniqueCampers,
        total: data.total,
        loading: false,
        error: null,
      };
    }),

  setLoading: (value) => set({ loading: value }),
  setError: (message) => set({ error: message, loading: false }),
  clearCampers: () =>
    set({ campers: [], total: 0, loading: false, error: null }),
}));
