import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import CustomLineChart from './components/CustomLineChart';

class App extends Component {
 constructor (){
  super();
  this.state = {
        chartData:{},

        votes: [
          {
            labels: 'Janvier',
            data: 3300,
          },
          {
            labels: 'Fevrier',
            data: 2357,
          },
          {
            labels: 'Mars',
            data: 1300,
          },
          {
            labels: 'Avril',
            data: 1762,
          },
          {
            labels: 'Mai',
            data: 2000,
          },
          {
            labels: 'Juin',
            data: 900,
          },
          {
            labels: 'Juillet',
            data: 900,
          },
          {
            labels: 'Aout',
            data: 1000,
          },
          {
            labels: 'Septembre',
            data: 1500,
          },
          {
            labels: 'Octobre',
            data: 1700,
          },
          {
            labels: 'Novembre',
            data: 1800,
          },
          {
            labels: 'Decembre',
            data: 1900,
          }
        ],
    }
 }
 
 componentWillMount(){ 
  this.getChartData();
 }

 getChartData(){
  var objArray = this.state.votes
  
  var Labels = objArray.map(({ labels }) => labels);
  var Data = objArray.map(({ data }) => data)

   this.setState({
    chartData:{
      labels: Labels,
      datasets:[
          {
              label:'Population',
              data: Data,
              backgroundColor: [
                  'red',
                  'green',
                  '#33CAFF',
                  '#338AFF',
                  '#33FFEC',
                  '#BD0C2C',
                  '#3948F1',
                  '#6D0CBD',
                  '#77AED3',
                  '#666565',
                  '#0C76BD',
                  '#BD0C7D'
              ],
          }
      ]
    }
   })
 }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <BarChart chartData={this.state.chartData} location="Chartjs" legendPosition="bottom"/>
          </div>
          <div className="col-md-6">
            <CustomLineChart location="Chartjs" legendPosition="bottom"/>
          </div>
        </div>
         
         <div className="row">
          <div className="col-md-6">
            <PieChart chartData={this.state.chartData} location="Chartjs" legendPosition="bottom"/>
          </div>
          <div className="col-md-6">
            <LineChart chartData={this.state.chartData} location="Chartjs" legendPosition="bottom"/>
          </div>
         </div>
        

      </div>
    );
  }
}

export default App;
