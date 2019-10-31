import { User } from "./user";

export interface Piu{
    id: string;
    favoritado: boolean ;
    conteudo: string;
    data: string;
    usuario: User;
}