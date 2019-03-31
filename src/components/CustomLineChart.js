import React, { Component } from 'react';
import  {Line} from 'react-chartjs-2';

class CustomLineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                labels: ["1", "2","3","4","5","6"],
                datasets:[
                    {
                        label: '2018',
                        backgroundColor: "rgba(0, 0, 255, 0.5)",
                        data: [4, 5, 1, 10, 32, 2, 12]
                    },
                    {
                        label: '2019',
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [10, 5, 10, 15, 14, 12]
                    },

                ]
              }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition: 'right'
    }

    render(){
        return (
            <div className="chart">
            <Line 
                data={this.state.data}
                width={100}
                height={80}
                options={{
                    responsive:true,
                    title:{
                        display:this.props.displayTitle,
                        text:'Custom Line '+this.props.location,
                        fontSize: 25
                    },
                }}
            />
            </div>
        )
    }
}
export default CustomLineChart;
