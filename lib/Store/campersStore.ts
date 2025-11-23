import { create } from "zustand";
import { Camper, Data } from "../api/api";

interface CampersState {
  campers: Camper[];
  total: number;
  loading: boolean;
  error: string | null;
  setCampers: (data: Data) => void;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
  clearCempers: () => void;
}

export const useCampersStore = create<CampersState>((set) => ({
  campers: [],
  total: 0,
  loading: false,
  error: null,

  setCampers: (data) =>
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
  clearCempers: () =>
    set({ campers: [], total: 0, loading: false, error: null }),
}));
