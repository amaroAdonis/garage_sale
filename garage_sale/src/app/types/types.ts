export interface User {
    id: string,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    birthday: Date, 
    uf: string, 
    city: string,
    profileImage: string
}

export interface Product {
    product_id: number,
    garage_id: number,
    category: string,
    title: string,
    description: string,
    price: number,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    delivery: boolean,
    noDelivery:boolean,
    newOne: boolean,
    used: boolean,
    fiscal: boolean
}

export interface Garage {
    garage_id: number
    title: string,
    category: string,
    description: string,
    profileImage: string,
    backgroungImage: string

}