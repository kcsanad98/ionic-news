import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"
import { HttpClientModule } from "@angular/common/http"
import { IonicModule, IonicRouteStrategy } from "@ionic/angular"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ComponentsModule } from "./components/components.module"
import { PipesModule } from "./pipes/pipes.module"
import { IonicStorageModule } from "@ionic/storage"

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ComponentsModule,
        PipesModule,
        IonicStorageModule.forRoot()
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {}
