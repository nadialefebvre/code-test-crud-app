export type actionsJSON = IRootObject[]

export interface IRootObject {
  _id: string
  text: string | null
  feeling: string
  timestamp: number | Date
}
