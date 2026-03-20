export interface SSTBodyRequest {
    message: string;
    role?: string | "farm";
}

export interface SSTResponse {
    msg: string;
    result: string;
}