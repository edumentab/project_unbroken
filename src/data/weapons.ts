import {WeaponDict, Weapon} from '../../types';

export const weapons: WeaponDict = {
  bareHands: {
    name: 'bareHands',
    attacks: [
      {cost: {largeEffort: 1}, effect: {break: 1}},
      {cost: {smallEffort: 2}, effect: {wound: 1}},
      {cost: {mediumEffort: 2}, effect: {wound: 3}},
    ],
    upgrades: [
      {name: 'club', cost: {wood: 3, smallEffort: 1, time: 1}},
      {name: 'knife', cost: {metal: 1, mediumEffort: 1, time: 2}},
    ]
  },
  club: {
    name: 'club',
    attacks: [
      {cost: {mediumEffort: 1}, effect: {break: 1}},
      {cost: {smallEffort: 1}, effect: {wound: 1}},
      {cost: {mediumEffort: 1, smallEffort: 1}, effect: {wound: 3}},
    ],
    upgrades: [
      {name: 'maul', cost: {wood: 3, smallEffort: 2, time: 2}},
      {name: 'axe', cost: {wood: 1, metal: 3, mediumEffort: 1, time: 4}}
    ]
  },
  maul: {
    name: 'maul',
    attacks: [
      {cost: {smallEffort: 1}, effect: {break: 1}},
      {cost: {smallEffort: 2}, effect: {break: 2}},
      {cost: {smallEffort: 3}, effect: {wound: 3}},
      {cost: {smallEffort: 2, mediumEffort: 1}, effect: {wound: 4}},
      {cost: {smallEffort: 1, mediumEffort: 1, largeEffort: 1}, effect: {wound: 5}},
    ],
    upgrades: []
  },
  axe: {
    name: 'axe',
    attacks: [
      {cost: {smallEffort: 2}, effect: {break: 1}},
      {cost: {largeEffort: 1}, effect: {wound: 5}},
      {cost: {mediumEffort: 2}, effect: {wound: 5}},
    ],
    upgrades: []
  },
  knife: {
    name: 'knife',
    attacks: [
      {cost: {smallEffort: 1, cunning: 1}, effect: {break: 1}},
      {cost: {smallEffort: 1}, effect: {wound: 1}},
      {cost: {mediumEffort: 1, smallEffort: 2}, effect: {wound: 3}},
      {cost: {largeEffort: 1, smallEffort: 1, cunning: 1}, effect: {wound: 5}},
    ],
    upgrades: [
      {name: 'sword', cost: {mediumEffort: 1, metal: 3, time: 2}},
      {name: 'spear', cost: {smallEffort: 1, metal: 1, wood: 1}},
    ]
  },
  sword: {
    name: 'sword',
    attacks: [
      {cost: {smallEffort: 1}, effect: {break: 1}},
      {cost: {smallEffort: 1}, effect: {wound: 1}},
      {cost: {mediumEffort: 1}, effect: {wound: 3}},
      {cost: {largeEffort: 1, smallEffort: 2}, effect: {wound: 5}},
    ],
    upgrades: []
  },
  spear: {
    name: 'spear',
    attacks: [
      {cost: {smallEffort: 2}, effect: {break: 1}},
      {cost: {smallEffort: 2}, effect: {wound: 2}},
      {cost: {mediumEffort: 1, smallEffort: 1}, effect: {wound: 3}},
      {cost: {largeEffort: 1, mediumEffort: 1}, effect: {wound: 5}},
    ],
    upgrades: []
  }
};
