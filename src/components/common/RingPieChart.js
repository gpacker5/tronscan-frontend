import React from 'react'
import config from './chart.config.js'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export class RingPieReact extends React.Component {

  constructor(props) {
    super(props)
    let id = ('_' + Math.random()).replace('.', '_');
    this.state = {
      pieId: 'pie' + id
    }
  }

  initPie(id) {
    let {data}=this.props;

    function compare(property) {
      return function (obj1, obj2) {

        if (obj1[property] > obj2[property]) {
          return 1;
        } else if (obj1[property] < obj2[property]) {
          return -1;
        } else {
          return 0;
        }

      }
    }

    let sortObj = data.sort(compare("name"));
    let pairData=[];
    let exchanges = []
    let temp=[];
    for (let index in sortObj) {
      pairData.push({name:sortObj[index].pair,value:sortObj[index].volume});
      if(temp.indexOf(sortObj[index].name)<0) {
        temp.push(sortObj[index].name)
        exchanges.push({name: sortObj[index].name, value: 0});
      }
    }

    for (let index in exchanges) {
      for (let idx in sortObj) {
        if (sortObj[idx].name === exchanges[index].name) {
          exchanges[index].value = exchanges[index].value + sortObj[idx].volume;
        }
      }
    }
    console.log(exchanges);
    console.log(pairData);
    config.ringPieChart.series[0].data=[];
    config.ringPieChart.series[1].data = [];
    let myChart = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(id));
    }
    console.log(temp);
      config.ringPieChart.legend.data=temp;

      config.ringPieChart.series[0].data=exchanges;
      config.ringPieChart.series[1].data = pairData;


    myChart.setOption(config.ringPieChart);
  }


  componentDidMount() {
    this.initPie(this.state.pieId);
  }

  componentDidUpdate() {
    this.initPie(this.state.pieId);
  }

  render() {
    return (
        <div>
          <div id={this.state.pieId} style={this.props.style}></div>
        </div>
    )
  }
}

export default RingPieReact
