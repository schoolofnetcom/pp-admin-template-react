import Cards from './../components/inside/Cards';
import Forms from './../components/inside/Forms';

const LoadingRoutes  = () => ([
    {
        path: "/cards",
        name: "Cards",
        template: Cards
    },
    {
        path: "/forms",
        name: "Forms",
        template: Forms
    }    
]);

export default LoadingRoutes();