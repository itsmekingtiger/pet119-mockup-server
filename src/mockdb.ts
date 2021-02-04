import { Dog, Owner } from "./message"

export var Owners = [
    new Owner(
        1,
        "홍길동",
    ),
    new Owner(
        2,
        "이명박",
    ),
    new Owner(
        3,
        "킹타",
    ),
]

export var Dogs = [
    new Dog(
        1,
        "흰둥이",
        1,
    ),
    new Dog(
        2,
        "검둥이",
        1,
    ),
    new Dog(
        4,
        "누렁이",
        1,
    ),
    new Dog(
        3,
        "도토리",
        2,
    ),

]

export function getOwners(): Owner[] {
    return Owners
}

export function getOwnerById(id: number): Owner {
    var owner = Owners.find((owner) => owner.id == id);
    owner.dogs = getDogs(id);
    return owner
}


export function getDogs(ownerId: number): Dog[] {
    return Dogs.filter(dog => dog.ownerID == ownerId);
}