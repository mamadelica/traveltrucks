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
  location: string;
  equipment: EquipmentId[];
  type: VehicleTypeId | "";
  transmission: "automatic" | "manual";
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

export async function fetchCampers(params?: CampersParams): Promise<Data> {
  const { location, equipment, type, transmission } =
    useFiltersStore.getState();

  const query = new URLSearchParams();

  // location → search

  // equipment → додаємо тільки якщо true (тобто вибрано)
  equipment.forEach((key) => {
    query.append(key, "true");
  });

  // type → filter
  if (type) query.append("filter", type);
  if (transmission === "automatic") query.append("transmission", "automatic");
  // додаткові параметри (page, limit)
  if (params?.page !== undefined) query.append("page", String(params.page));
  if (params?.limit !== undefined) query.append("limit", String(params.limit));
  if (location) query.append("location", location);
  const url = `${backendApi.defaults.baseURL}/campers?${query.toString()}`;
  console.log(url);

  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to fetch campers: ${response.statusText}`);
  }

  const data: Data = await response.json();
  console.log(data);
  return data;
}

export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await backendApi.get<Camper>(`/campers/${id}`);
  return response.data;
};
export async function loadCampers(params?: { page?: number; limit?: number }) {
  const { setCampers, setLoading, setError } = useCampersStore.getState();
  const { location, equipment, type, transmission } =
    useFiltersStore.getState();

  try {
    setLoading(true);
    const data = await fetchCampers({
      ...params,
      location,
      equipment,
      type,
      transmission,
    });
    setCampers(data);
  } catch (err) {
    setError(err instanceof Error ? err.message : "Unknown error");
  }
}
