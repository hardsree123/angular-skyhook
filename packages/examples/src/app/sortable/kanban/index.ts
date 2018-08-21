import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "app/utility.module";
import { SkyhookDndModule } from "angular-skyhook";
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from "@angular/forms";
import { SkyhookMultiBackendModule } from "angular-skyhook-multi-backend";
import { SkyhookCardListModule } from "angular-skyhook-card-list";

import { KanbanContainerComponent } from "./kanban-container/kanban-container.component";
import { KanbanBoardComponent } from "./kanban-board/kanban-board.component";
import { KanbanListComponent } from "./kanban-list/kanban-list.component";
import { KanbanCardComponent } from "./kanban-card/kanban-card.component";
import { AddCardComponent } from "./add-card.component";
import { TrashCanComponent } from "./trash-can.component";
import { reducer } from './store';

@NgModule({
    declarations: [
        KanbanContainerComponent,
        KanbanBoardComponent,
        KanbanListComponent,
        KanbanCardComponent,
        AddCardComponent,
        TrashCanComponent,
    ],
    imports: [
        CommonModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookCardListModule,
        ReactiveFormsModule,
        StoreModule,
        StoreModule.forFeature('kanban', reducer),
        RouterModule.forChild([
            { path: "", component: KanbanContainerComponent }
        ])
    ]
})
export class KanbanModule { }