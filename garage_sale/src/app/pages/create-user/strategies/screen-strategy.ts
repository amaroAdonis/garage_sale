import { User } from "src/app/types/types";

export class ScreenStrategy{
    loadUser(id?: string): Promise<User> {throw Error("Not implemented")};
    saveUser(user: User): Promise<User> {throw Error("Not implemented!")};
    getTitle(): string {throw Error("Not implemented")}
}