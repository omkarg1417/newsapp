import './App.css';
import React, {useState, Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress:0
  };
  setProgress = (progress) => {
    this.setState({ progress });
  };

  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  render() {
    let pageSize = 12;
    return (
      <Router>
      <div>
            <Navbar/>
            <LoadingBar
              color="red"
              progress={this.state.progress}
              onLoaderFinished = { () => this.setProgress(0) }
            />
            <Routes>
              <Route exact  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
              
              <Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
              
              <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
              
              <Route exact  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
              
              <Route exact  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
              
              <Route exact  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
              
              <Route exact  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>

            </Routes>

      </div>    
      </Router>
    )
  }
}