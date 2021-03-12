import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"

const apiKey = environment.apiKey
const apiUrl = environment.apiUrl

@Injectable({
    providedIn: "root"
})
export class NewsService {
    constructor(private http: HttpClient) {}

    public getData(url) {
        return this.http.get(`${apiUrl}/${url}apiKey=${apiKey}`)
    }
}
