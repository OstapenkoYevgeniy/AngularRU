import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';

@NgModule({
    // классы представлений (view classes), которые принадлежат модулю.
    // Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
    declarations: [
        AppComponent
    ],
    // imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
    imports: [
        BrowserModule,
        FormsModule
    ],
    // providers: классы, создающие сервисы, используемые модулем
    providers: [],
    // bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
    bootstrap: [AppComponent],
    // набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
    exports: []
})
export class AppModule {
}
