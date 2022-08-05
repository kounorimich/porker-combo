export const CardSuit = {
  Club: 'c',
  Diamond: 'd',
  Heart: 'h',
  Spade: 's'
} as const

export type CardSuit = typeof CardSuit[keyof typeof CardSuit]
