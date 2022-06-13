export interface ActiveUser {
    firstname: string;
    lastname:  string;
    email:     string;
    username:  string;
    _id:       string;
    role:      Role;
}

export interface Role {
    _id:       string;
    role:      string;
    role_name: string;
}


export interface LoginResponse {
    access_token: string;
    token_type: string;
}