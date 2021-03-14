import { Component, OnInit } from "@angular/core"
import { Storage } from "@ionic/storage"

@Component({
    selector: "app-favorites",
    templateUrl: "./favorites.page.html",
    styleUrls: ["./favorites.page.scss"]
})
export class FavoritesPage implements OnInit {
    sources = []

    constructor(private storage: Storage) {}

    ngOnInit() {
        this.getFavorites()
    }

    public getFavorites() {
        const storageKey = "favorite"
        this.storage.get(storageKey).then(val => {
            if (val) {
                this.sources = JSON.parse(val)
            }
        })
    }

    public onRefresh() {
        this.getFavorites()
    }

    public unFavorite(source) {
        const index = this.sources.indexOf(source)
        this.sources.splice(index, 1)
        this.storage.set("favorite", JSON.stringify(this.sources))
    }
}
