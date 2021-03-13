import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { NewsService } from "src/app/services/news.service"

@Component({
    selector: "app-source",
    templateUrl: "./source.page.html",
    styleUrls: ["./source.page.scss"]
})
export class SourcePage implements OnInit {
    public news: any
    private id: string

    constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id")
        this.news = this.newsService.getData(`everything?sources=${this.id}`)
    }
}
