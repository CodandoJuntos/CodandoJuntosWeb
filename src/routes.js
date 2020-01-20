// const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')

import Login from './components/inicio/Login';
import Cadastro from './components/inicio/Cadastro';

export const routes = [
    { path: '', name: 'login', component: Login, titulo: 'Login', menu: true},
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    { path: '*', name:'default', component: Login, menu: false}
];