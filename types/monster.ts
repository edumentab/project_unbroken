import {Range0to6, Range0to21} from './';

export type Monster = {
  name: MonsterName
  armour: Range0to6
  health: Range0to21
};

export type MonsterName = 'someMonster'
