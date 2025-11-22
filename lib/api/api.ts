import axios from "axios";

export const backendApi = axios.create();
backendApi.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

interface CampersParams {
  search?: string;
  filter?: string;
  page?: number;
  limit?: number;
}

interface Data {
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

export const getCampersData = async (params: CampersParams): Promise<Data> => {
  const response = await backendApi.get<Data>(`/campers`, { params });
  return response.data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await backendApi.get<Camper>(`/campers/${id}`);
  return response.data;
};
