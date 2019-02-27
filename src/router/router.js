import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import Loadable from 'react-loadable';



const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
};

const Index = Loadable({
    loader: () => import('../view/index'),
    loading: MyLoadingComponent
});
// const AsyncWelcome = Loadable({
//   loader: () => import('./page/welcome/'),
//   loading: MyLoadingComponent
// });
// const AsyncLogin = Loadable({
//   loader: () => import('./page/login/'),
//   loading: MyLoadingComponent
// });
// const AsyncStore = Loadable({
//   loader: () => import('./page/store/'),
//   loading: MyLoadingComponent
// });
// const AsyncUser = Loadable({
//   loader: () => import('./page/user/'),
//   loading: MyLoadingComponent
// });
// const AsyncCheckAuth = Loadable({
//   loader: () => import('./page/checkAuth/'),
//   loading: MyLoadingComponent
// });
// const AsyncError= Loadable({
//   loader: () => import('./page/error'),
//   loading: MyLoadingComponent
// });

const routes = [
    { path: '/index', component: Index, exact: true },
    // { path: '*', component: Index },
    // { path: '/login', component: AsyncLogin },
    // { path: '/welcome', component: AsyncWelcome },
    // { path: '/store', component: AsyncStore },
    // { path: '/user', component: AsyncUser }
]


export  default class Rout extends Component{
    render() {
        return (
            <Router >
                <div>
                    {
                        routes.map(route => (
                            <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                        ))
                    }
                </div>

            </Router>
        );
    }
}


