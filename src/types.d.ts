export interface Food {
    id: number,
    name: string,
    price: number,
    image: string,
}

export interface Button {
    id: number,
    name: string,
    price: number,
    image: string,
    onClick: () => void;
}

export interface Order {
    id: number,
    name: string,
    price: number,
    count: number,
    image: string,
    onClickDelete: (index: number) => void;
}