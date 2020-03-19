import VueRouter from 'vue-router';
import Header from '../components/Header';
import Home from '../components/Home';
import Forma from '../components/Forma';
import Srbija from '../components/HomeSrbija';

export const routes=[
    {
        path : '/forma', name: 'home',components:{
            default: Forma,
            'header':Header 
        }
    },
    {
        path : '/srbija', name: 'srbija',components:{
            default: Srbija,
            'header':Header
        }
    },
    {
        path : '/', name: 'home',components:{
            default: Home,
            'header':Header
        }
    }

];
