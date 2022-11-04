export interface Player {
  id?: number;
  email: string;
  nickname?: string;
  password: string;
  matchingPassword: string;
  enabled?: boolean;
}
