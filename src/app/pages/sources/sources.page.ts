import { Component, OnInit } from "@angular/core"
import { NewsService } from "src/app/services/news.service"

@Component({
    selector: "app-sources",
    templateUrl: "./sources.page.html",
    styleUrls: ["./sources.page.scss"]
})
export class SourcesPage implements OnInit {
    public sources: any
    public term: string = ""

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        //this.sources = this.newsService.getData("sources")
        this.newsService.getData("sources").subscribe(sources => (this.sources = sources["sources"]))
    }
}
