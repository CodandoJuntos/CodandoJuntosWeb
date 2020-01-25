// const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')

import Login from './components/inicio/Login';
import Cadastro from './components/inicio/Cadastro';
import TermosDeUso from './components/inicio/TermosDeUso';
import Blog from './components/inicio/Blog';
import PoliticaDePrivacidade from './components/inicio/PoliticaDePrivacidade';

export const routes = [
    { path: '', name: 'login', component: Login, titulo: 'Login', menu: true},
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    { path: '/termos-de-uso', name: 'termosDeUso', component: TermosDeUso, titulo: 'Termos de uso', menu: false},
    { path: '/politica-de-privacidade', name: 'politicaDePrivacidade', component: PoliticaDePrivacidade, titulo: 'Politica de privacidade', menu: false},
    { path: '/blog', name: 'blog', component: Blog, titulo: 'Blog', menu: false},
    { path: '*', name:'default', component: Login, menu: false}
];