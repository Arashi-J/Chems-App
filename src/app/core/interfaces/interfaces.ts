export interface User {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password?: string;
    _id?: string;
    role: Role;
    areas?: Area[];
    last_update_by?: UpdateBy;
    last_update_date?: Date;
    status?: boolean;
}

export interface Role {
    _id: string;
    role: string;
    role_name: string;
}


export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface Chemical {
    chemical: string;
    _id: string;
    hazards: Hazard[];
    providers: string[];
    manufacturers: string[];
    p_phrases: Phrase[];
    h_phrases: Phrase[];
    ppes: Ppe[];
    sds: string[];
    fsms?: Approval;
    ems?: Approval;
    ohsms?: Approval;
    last_update_by?: UpdateBy;
    last_update_date?: Date;
    status?: boolean;
}

export interface Approval {
    approval: boolean;
    approbed_by: string;
    approval_date: Date;
}

export interface Hazard {
    _id: string;
    code: string;
    hazard: string;
    description: string;
    precaution: string;
    pictogram: string;
}

export interface Ppe {
    _id: string;
    ppe: string;
    img: string;
}

export interface UpdateBy {
    _id: string;
    username: string;
}

export interface Phrase {
    code: string;
    description: string;
}


export interface Area {
    area: string;
    chemicals: Chemical[];
    _id: string;
    last_update_by: UpdateBy;
    last_update_date: Date;
    status: boolean;
}

export interface Column<T>{
    columnDef: string;
    header: string;
    cell: (item: T) => string;
    link: (item: T) => string;
}
