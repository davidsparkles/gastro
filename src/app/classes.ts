export class Product {
    id: string
    label: string
    price: number
}

export class Item {
    id: string
    label: string
    price: number
    isPayed: boolean
}

export class Table {
    id: string
    items: Item[]
}