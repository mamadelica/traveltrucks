import axios from "axios";
import { useFiltersStore } from "../Store/FiltersStore";
import { useCampersStore } from "../Store/campersStore";
import { EquipmentId, VehicleTypeId } from "../types/filtersTypes";

export const backendApi = axios.create();
backendApi.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

interface CampersParams {
  search?: string;
  filter?: string;
  page?: number;
  limit?: number;
  location?: string;
  equipment?: EquipmentId[];
  type?: VehicleTypeId | "";
  transmission?: "automatic" | "manual";
}

export interface Data {
  total: number;
  items: Camper[];
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Images[];
  reviews: Reviews[];
}

interface Images {
  thumb: string;
  original: string;
}

export interface Reviews {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

// "чиста" функція — формує URL тільки з переданих параметрів
export async function fetchCampers(params: CampersParams): Promise<Data> {
  const query = new URLSearchParams();

  params.equipment?.forEach((key) => query.append(key, "true"));
  if (params.type) query.append("filter", params.type);
  if (params.transmission === "automatic")
    query.append("transmission", "automatic");
  if (params.page !== undefined) query.append("page", String(params.page));
  if (params.limit !== undefined) query.append("limit", String(params.limit));
  if (params.location) query.append("location", params.location);

  const url = `${backendApi.defaults.baseURL}/campers?${query.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch campers: ${response.statusText}`);
  }
  return response.json();
}

// loadCampers збирає фільтри зі стору + додає пагінацію
export async function loadCampers(params?: { page?: number; limit?: number }) {
  const { setCampers, setLoading, setError } = useCampersStore.getState();
  const { location, equipment, type, transmission } =
    useFiltersStore.getState();

  try {
    setLoading(true);
    const data = await fetchCampers({
      ...params, // page, limit
      location, // фільтри зі стору
      equipment,
      type,
      transmission,
    });
    setCampers(data);
  } catch (err) {
    setError(err instanceof Error ? err.message : "Unknown error");
  }
}

export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await backendApi.get<Camper>(`/campers/${id}`);
  return response.data;
};
