export const noFlip = 0
export const flipX = 1
export const flipY = 2
export const flipBoth = 3

export const flipBits = [noFlip, flipX, flipY, flipBoth] as const

export const cardinalDirs = ['n', 's', 'e', 'w'] as const

export const layerTypes = [ 
  'IntGrid', 'Entities', 'Tiles', 'AutoLayer' 
] as const
