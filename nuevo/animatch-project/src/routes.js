import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AppSoport from '@/soport/AppSoport.vue';
import HomePage from '@/components/HomePage.vue';
import Matchs from '@/components/PerfilesMatch/perfilMatch.vue'
import IniciarSesion from '@/Login/IniciarSesion.vue';
import CrearCuenta from '@/Registro/CrearCuenta.vue';
import Profile from '@/Profile/PerfilUser.vue';
import Chat from '@/Chat/App.vue';

const routes = [
    { path: '/', component: App },  
    { path: '/soport', component: AppSoport },
    { path: '/home', component: HomePage },
    { path: '/matchs', component: Matchs },
    { path: '/login', component: IniciarSesion },
    { path: '/registro', component: CrearCuenta },
    { path: '/micuenta', component: Profile},
    { path: '/chats', component: Chat},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;