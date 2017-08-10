import CoreLatyout from '../layouts/CoreLayout'
import Home from './Home'
import Feature from './Feature'

export default {
    path: '/',
    component: CoreLatyout,
    indexRoute: Home,
    childRoutes: [
        {
            path: 'features',
            component: Feature,
        },
    ]
}