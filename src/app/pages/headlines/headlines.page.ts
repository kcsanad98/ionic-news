import { Component, OnInit } from "@angular/core"
import { NewsService } from "src/app/services/news.service"

@Component({
    selector: "app-headlines",
    templateUrl: "./headlines.page.html",
    styleUrls: ["./headlines.page.scss"]
})
export class HeadlinesPage implements OnInit {
    public news: any
    public categories = ["India", "World", "Business", "Technology", "Entertainment", "Sports", "Science"]

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.onGetCategoryData("World")
    }

    public onGetCategoryData(category: string) {
        this.news = this.newsService.getData(`everything?q=${category.toLowerCase()}`)
    }
}
