export interface Tour {
  routeId: number;
  tourLength: number;
  rate: number;
  levelRise: number;
  difficulty: string;
  routeType: string;
  tourType: string;
  description: string;
  title: string;
  createdBy?: string;
}
