import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { AlunosAtividadesComponent } from './content/alunos-atividades/alunos-atividades.component';
import { CadEventosComponent } from './content/admin/cad-eventos/cad-eventos.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'changelog', component: ChangelogComponent, canActivate: [AuthGuard] },
      { path: 'alunosAtividades', component: AlunosAtividadesComponent, canActivate: [AuthGuard] },
      {
        path: 'calender', loadChildren: () => import('../app/content/calender/calender.module').then(m => m.CalenderModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'admin', loadChildren: () => import('../app/content/admin/form-elements.module').then(m => m.FormElementsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'kanban', loadChildren: () => import('../app/content/kanban/kanban.module').then(m => m.KanbanModule),
        canActivate: [AuthGuard]
      },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'changelog' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top'});
