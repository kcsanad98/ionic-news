import { IonicModule } from "@ionic/angular"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { TabsPageRoutingModule } from "./tabs-routing.module"

import { TabsPage } from "./tabs.page"
import { TopNewsPageModule } from "../top-news/top-news.module"
import { FavoritesPageModule } from "../favorites/favorites.module"
import { HeadlinesPage } from "../headlines/headlines.page"
import { SettingsPageModule } from "../settings/settings.module"
import { SourcesPageModule } from "../sources/sources.module"

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
    declarations: [TabsPage]
})
export class TabsPageModule {}
