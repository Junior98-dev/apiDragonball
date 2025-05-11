import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'DragonBall Z',
        loadComponent: () => import('./pages/dragonball/dragonball.component'),
    },
    {
        path: 'dragonball/:id',
        loadComponent: () => import('./pages/dragonball-info/dragonball-info.component'),
    }
];
