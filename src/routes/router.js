import VueRouter from 'vue-router';
import Header from '../components/Header';
import Home from '../components/Home';

const routes=[
    {
        path : '/', name: 'home',components:{
            default: Home,
            'header':Header 
        }
    }

];

export default new VueRouter({
    routes
  });