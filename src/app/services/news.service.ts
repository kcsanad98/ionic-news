import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { LoadingController } from "@ionic/angular"
import { environment } from "src/environments/environment"

const apiKey = environment.apiKey
const apiUrl = environment.apiUrl
const params = new HttpParams().set("apiKey", apiKey)

@Injectable({
    providedIn: "root"
})
export class NewsService {
    //loading: any
    constructor(private http: HttpClient /*private loadingController: LoadingController*/) {}

    public getData(url) {
        //this.showLoading()
        return this.http.get(`${apiUrl}/${url}`, { params })
        /*
            .pipe
            tap(() => {
                try {
                    this.loading.dismiss()
                } catch (e) {}
            })
            ()
            */
    }
    /*
    public async showLoading() {
        this.loading = await this.loadingController.create()
        return await this.loading.present()
    }
    */
}
