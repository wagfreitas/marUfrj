import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';

import { BlockUIModule } from 'ng-block-ui';

import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    MatchHeightModule,
    BreadcrumbModule,
    NgbModule,

    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),

    RouterModule.forChild([
      {
        path: 'cadEventos',
        component: CadEventosComponent 
      },
     
    ])
  ],
  declarations: [CadEventosComponent],
  exports: [RouterModule]
})
export class FormElementsModule { }
