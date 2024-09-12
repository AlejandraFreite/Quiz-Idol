import { Quiz } from "./quiz";

export interface Band {
    id: string;
    name: string;
    info: string;
    members: any[]; // TODO: Definir tipo member mas adelante
    quiz: Quiz;
}