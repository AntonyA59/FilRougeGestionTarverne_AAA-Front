import { Player } from './player';

export interface AuthStatus {
  connected: boolean;
  player?: Player;
}
