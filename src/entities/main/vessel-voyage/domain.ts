import { VesselVoyageId } from "@/kernel/vessels-voyage";

export type VesselVoyageEntity = {
  id: VesselVoyageId;
  estimated_date_departure: Date;
  vessel_id: string;
  user_id: string;
};
