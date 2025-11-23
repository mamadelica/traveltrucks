import { create } from "zustand";
import { Camper, fetchCampers } from "../api/api";
import { useFiltersStore } from "./FiltersStore";

interface PaginationState {
  results: Camper[];
  page: number;
  limit: number;
  loading: boolean;
}

interface PaginationActions {
  search: () => Promise<void>;
  loadMore: () => Promise<void>;
  clearResults: () => void;
}

export const usePaginationStore = create<PaginationState & PaginationActions>(
  (set, get) => ({
    results: [],
    page: 1,
    limit: 4,
    loading: false,

    clearResults: () => set({ results: [], page: 1 }),

    search: async () => {
      const filters = useFiltersStore.getState();
      set({ loading: true, results: [], page: 1 });

      try {
        const data = await fetchCampers({
          ...filters,
          page: 1,
          limit: get().limit,
        });
        set({ results: data.items, loading: false });
      } catch (err) {
        console.error(err);
        set({ loading: false });
      }
    },

    loadMore: async () => {
      const filters = useFiltersStore.getState();
      const nextPage = get().page + 1;
      set({ loading: true });

      try {
        const data = await fetchCampers({
          ...filters,
          page: nextPage,
          limit: get().limit,
        });
        set({
          results: [...get().results, ...data.items],
          page: nextPage,
          loading: false,
        });
      } catch (err) {
        console.error(err);
        set({ loading: false });
      }
    },
  })
);
