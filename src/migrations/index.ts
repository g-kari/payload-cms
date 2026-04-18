import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260418_103926 from './20260418_103926';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260418_103926.up,
    down: migration_20260418_103926.down,
    name: '20260418_103926'
  },
];
