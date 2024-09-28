// ~/types/index.ts

export {}

declare global {
  interface ISoundCard {
    title: string
    description: string
    favorite: boolean
    url: string
  }
}
