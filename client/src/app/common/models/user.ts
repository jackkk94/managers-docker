import { Guid } from "guid-typescript";
import { Office } from "./office";
import { Project } from "./project";

export interface User {
    id: Guid;
    name: string;
    surname: string;
    fullName: string;
    phone: string;
    position: string;
    email: string;
    office: Office;
    experience: number;
    age: number;
    isActive: boolean;
    project: Project;
    photoUrl?: string;
}