import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/types/types";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditUserStrategy implements ScreenStrategy{
    
    constructor(private http: HttpClient){}

    loadUser(id?: string | undefined): Promise<User> {
        const observable = this.http.get<User>(`/api/user/${id}`)
        return firstValueFrom(observable);
    }
    saveUser(user: User): Promise<User> {
        const observable = this.http.put<any>(`/api/user/${user.id}`, user)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Edite suas informações!"
    }

    
}