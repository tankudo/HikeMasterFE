export interface SearchRequest {
  tourType: string;
  routeType: string;
  difficulty: string;
  tourLength: number;
  levelRise: number;
  rate: number;
}

export interface UserSearchRequest {
  createdBy: string;
}
