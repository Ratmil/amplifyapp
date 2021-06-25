import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WorkOrders from './WorkOrdersComponent';
import WorkOrder from './WorkOrderComponent';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Main extends Component{

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Link to="/">Workorders</Link>
                    <Link to="/wo/123">WO 123</Link>
                    <Link to="/wo/124">WO 124</Link>
                    <Link to="/wo/125">WO 125</Link>
                    <Switch>
                        <Route exact path="/">
                            <WorkOrders 
                            />
                        </Route>
                        <Route exact path="/wo/:wo_id">
                            <WorkOrder 
                                />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}