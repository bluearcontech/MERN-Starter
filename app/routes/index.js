import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLatyout from '../layouts/CoreLayout'
import Home from './Home'

export default (
    <Route path="/" component={CoreLatyout}>
        <IndexRoute component={Home} />
    </Route>
)