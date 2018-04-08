import {Resources, Range0to6} from './';

export type WeaponName = 'bareHands' | 'club' | 'knife' | 'maul' | 'axe' | 'sword' | 'spear'

export type WeaponDict = {
  [name in WeaponName]: Weapon<name>
};

export type Weapon<T = WeaponName> = {
  name: T
  attacks: Attack[]
  upgrades: Upgrade[]
};

export type Upgrade = {
  name: WeaponName
  cost: Resources
}

export type Attack = {
  cost: Resources
  effect: AttackEffect
};

export type AttackEffect = {
  wound?: Range0to6
  break?: Range0to6
}
