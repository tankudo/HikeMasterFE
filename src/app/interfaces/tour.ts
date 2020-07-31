export interface Tour {
  routeId: number;
  tourLength: number;
  rate: number;
  levelRise: number;
  text: string;
  routeType: string;
  tourType: string;
  title: string;
  createdBy?: string;
  difficulty: string;
}
