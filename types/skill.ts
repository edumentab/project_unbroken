export type SkillName =
  | 'awareness'
  | 'berserk'
  | 'cautious'
  | 'concentration'
  | 'daring'
  | 'grimDetermination'
  | 'heroicPerseverance'
  | 'impale'
  | 'improvisedArmour'
  | 'inventive'
  | 'outdoorsman'
  | 'patient'
  | 'perfectMemory'
  | 'poisonMastery'
  | 'resistant'
  | 'sacrifice'
  | 'shadow'
  | 'spikeThrower'
  | 'stoic'
  | 'survivor'
  | 'tinker'
  | 'verminMaster'
  | 'weaponsmith'
  | 'wrecker'

export type Skills = {
  [name in SkillName]?: boolean
}
