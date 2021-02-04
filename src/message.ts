export class Message {
    data: any
}

export class Owner {
    id: number
    name: string
    dogs?: Dog[]

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class Dog {
    id: number
    name: string
    ownerID: number

    constructor(id: number, name: string, ownerID: number) {
        this.id = id;
        this.name = name;
        this.ownerID = ownerID
    }
}