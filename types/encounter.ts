import {Resources, Gain, Range0to7} from './';

export type EncounterCost = Resources & {
  time: Range0to7 // make it mandatory
  commit?: boolean
}

export type EncounterChoise = 'rest' | 'perform';

export type EncounterName =
  | 'boarAmbush'
  | 'crypticMarkings'
  | 'disruptingTheFeast'
  | 'eavesdropping'
  | 'juicyBats'
  | 'sicklyBerries1'
  | 'sicklyBerries2'
  | 'sicklyBerries3'
  | 'slitheringSnake'
  | 'spearFishing'
  | 'suspiciousMushroom'

export type Encounter<T = EncounterName> = {
  name: T,
  cost: EncounterCost,
  effect: Gain,
}

export type EncounterDict = {
  [name in EncounterName]: Encounter<name>
}

export type EncounterState = {
  revealed: EncounterName[]
  discarded: EncounterName[]
  selected: number | null
  committed: boolean
}
