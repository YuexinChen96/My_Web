import React,{Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import {Globalstyle} from './style.js';
import {Globalstyle1} from './statics/iconfont/iconfont.js';
import store from './store'
import Home from './pages/home';
import Detail from './pages/detail';
import Music from './pages/music';
import Intro from './pages/intro';
import Login from './pages/login';
import Share from './pages/share';

class App extends Component {
  render(){
    return(
    	<Provider store={store}>
     		<div className="App">
     			<Globalstyle />
                <Globalstyle1 />
     		</div>
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                        <Route path='/share' exact component={Share}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/music' exact component={Music}></Route>
                        <Route path='/intro' exact component={Intro}></Route>
                    </BrowserRouter>
                </Provider>
            </div>
     	</Provider>
    );
  }
}

export default App;
