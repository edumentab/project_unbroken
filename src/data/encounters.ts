import { EncounterDict } from '../../types';

export const encounters: EncounterDict = {
  boarAmbush: {
    name: 'boarAmbush',
    cost: {time: 4, mediumEffort: 1},
    effect: {food: 3}
  },
  crypticMarkings: {
    name: 'crypticMarkings',
    cost: {time: 2, mediumEffort: 1},
    effect: {cunning: 2}
  },
  disruptingTheFeast: {
    name: 'disruptingTheFeast',
    cost: {time: 2, cunning: 1},
    effect: {food: 2}
  },
  eavesdropping: {
    name: 'eavesdropping',
    cost: {time: 1, commit: true},
    effect: {cunning: 1}
  },
  juicyBats: {
    name: 'juicyBats',
    cost: {time: 1, largeEffort: 1},
    effect: {food: 2, smallEffort: 2}
  },
  sicklyBerries1: {
    name: 'sicklyBerries1',
    cost: {time: 1, smallEffort: 1},
    effect: {food: 1}
  },
  sicklyBerries2: {
    name: 'sicklyBerries2',
    cost: {time: 1, smallEffort: 1},
    effect: {food: 1}
  },
  sicklyBerries3: {
    name: 'sicklyBerries3',
    cost: {time: 1, smallEffort: 1},
    effect: {food: 1}
  },
  slitheringSnake: {
    name: 'slitheringSnake',
    cost: {cunning: 1, time: 2},
    effect: {food: 2},
  },
  spearFishing: {
    name: 'spearFishing',
    cost: {metal: 1, time: 2},
    effect: {food: 2},
  },
  suspiciousMushroom: {
    name: 'suspiciousMushroom',
    cost: {time: 4, smallEffort: 1},
    effect: {food: 2}
  },
};
