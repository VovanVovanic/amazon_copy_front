export interface IRanges {
 min?: number
 max?: number
 fromInit?: string
 toInit?: string
 onChangeFrom: (from: string) => void
 onChangeTo: (to:string)=>void
}