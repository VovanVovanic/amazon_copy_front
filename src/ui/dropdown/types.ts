
export interface IDrop<K=string>{
 onSelect: (data: ISortType<K>) => void
 items: ISortType<K>[]
 value?: ISortType<K>
 title?: string
}
export interface ISortType<K=string>{
 key: K 
 label: string
}

