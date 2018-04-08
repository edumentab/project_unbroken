import {Range0to7, Range0to21, Range0to31} from './';

export type Resources = {
  smallEffort?: Range0to21
  mediumEffort?: Range0to7
  largeEffort?: Range0to7
  cunning?: Range0to7
  metal?: Range0to7
  wood?: Range0to7
  treasure?: Range0to7
  food?: Range0to7
  time?: Range0to31
}

export type Gain = Resources;
