export default class Visitor {
    id?: number;
    username: string;
    name: string;
    password: string;
    phoneNumber: string;
    acceptedCommercial: boolean;
    acceptedTerms: boolean;
    userType: boolean;
}

export class FilterVisitor {
    pageable: Pageable;
    username?: string;
    password?: string;
}

export class Pageable {
    pageSize: number;
    pageNumber: number;
    sort?: Sort[];
}

export class Sort {
    property: string;
    direction: string;
}

export class Role {
    name: string;
    permission: number;
}