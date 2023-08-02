import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { User } from "src/app/types/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CreateUserStrategy implements ScreenStrategy {

    constructor(private http: HttpClient) {}

    public loadUser(id?: string | undefined): Promise<User> {
        return Promise.resolve(<User>{});
    }
    saveUser(user: User): Promise<any> {
        const observable = this.http.post<any>('api/user', user)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Criando um novo usuário"
    }

}