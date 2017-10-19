import {Component} from '@angular/core';
import {Item} from "../entity/item";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: Item[] =
        [
            {purchase: "Хлеб", done: false, price: 15.9},
            {purchase: "Масло", done: false, price: 60},
            {purchase: "Картофель", done: true, price: 22.6},
            {purchase: "Сыр", done: false, price: 310}
        ];

    addItem(text: string, price: number): void {
        if (text == null || text == undefined || text.trim() == "" || price == null || price == undefined) {
            console.log("Ошибка добавления элемента");
            return;
        }
        this.items.push(new Item(text, price));
    }
}
