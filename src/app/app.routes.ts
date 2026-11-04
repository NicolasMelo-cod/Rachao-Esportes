import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Partidas } from './pages/partidas/partidas';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
{
    path: 'login',
    component: Login
},
{
    path: 'cadastro',
    component: Cadastro
},

{
    path: 'partidas',
    component: Partidas
}
];