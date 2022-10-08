export type actionsJSON = IRootObject[]

export interface IRootObject {
  _id: string
  text: string
  feeling: string
  timestamp: number | Date
}
