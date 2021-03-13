import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: "search"
})
export class SearchPipe implements PipeTransform {
    transform(sources: any, term: string): any {
        if (term === "") {
            return sources
        }

        return sources.filter(source => source.name.toLowerCase().includes(term.toLowerCase()))
    }
}
