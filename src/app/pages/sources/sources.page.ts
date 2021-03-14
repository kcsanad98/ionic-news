import { Component, OnInit } from "@angular/core"
import { ToastController } from "@ionic/angular"
import { Storage } from "@ionic/storage"
import { NewsService } from "src/app/services/news.service"

@Component({
    selector: "app-sources",
    templateUrl: "./sources.page.html",
    styleUrls: ["./sources.page.scss"]
})
export class SourcesPage implements OnInit {
    public sources: any
    public term: string = ""

    constructor(private newsService: NewsService, private storage: Storage, private toastController: ToastController) {}

    ngOnInit() {
        //this.sources = this.newsService.getData("sources")
        this.newsService.getData("sources").subscribe(sources => (this.sources = sources["sources"]))
    }

    public favorite(source) {
        const storageKey = "favorite"
        this.storage.get(storageKey).then(val => {
            let items = []
            if (val) {
                items = JSON.parse(val)
            }
            items.push(source)
            this.storage.set(storageKey, JSON.stringify(items))
            this.presentToast()
        })
    }

    public async presentToast() {
        const toast = await this.toastController.create({
            message: "Added to favorites",
            duration: 2000
        })
        toast.present()
    }
}
