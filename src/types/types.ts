export type IPost = {
    id: number;
    content: string;
    created_datetime: string;
    title: string;
    username: string;
}

export type IApiPost = {
    username: string;
    title: string;
    content: string;
}

export type IApiPatch = {
    username?: string;
    title?: string;
    content?: string;
}