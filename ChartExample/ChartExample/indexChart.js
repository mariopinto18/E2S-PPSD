let xdata = []; 
let xlabels= [];


const chartConfig = {
    //  chart elemnts
 type: 'bar',     // chart type: bar, pie, line, radar, polarAres, etc...

 data: {
    labels: xlabels,
    datasets: [{
        label: '#Total Deaths',
      //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
        backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
        borderColor: 'gray',
        borderWidth: 2,
        hoverBorderWidth:4,
        hoverBorderColor: '#000',
        hoverBackgroundColor: 'gray',
        data: xdata,
    }],
    
 },    // end data object
 
}  // end object


function GetData() {     // function to push data and labels in arrays
                        // we could input data from a database or LocalStorage
    xdata.push(854, 22524, 22529, 21856);   
    xlabels.push('Portugal', 'Spain', 'Italy', 'France');
}

GetData();
const chartBar = document.getElementById('myChart1')
const myChart = new Chart(chartBar, chartConfig) ;







function chart(typeChart, elementChart)
{

    let myChart = document.getElementById(elementChart).getContext('2d');
    
    let chart1 = new Chart(myChart, chartConfig)
   
    chart1.render();     // render the chart object on the canvas element
    chart1.clear();      // clear the canvas element
    
    chart1.data.datasets[0].data = [120,200,300,400];
    chart1.options.title = { display:true, text: 'Test Update Method'};
    chart1.update();     // update the chart according properties above defined


}


// Chart1 --------------------------------
function chart1(typeChart, elementChart)
{
   

    let myChart = document.getElementById(elementChart).getContext('2d');
   
    let chart1 = new Chart(myChart, {
 //  chart elemnts
     type: typeChart,    // chart type: bar, pie, line, radar, polarAres, etc...

     data: {

        labels: xlabels,
        datasets: [{
            label: '#Total Deaths',
          //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
            backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            hoverBackgroundColor: 'gray',
            data: xdata,
        }],
        
     },    // end data object
     options: {
       
        title: {
            display: true,
            text: 'Covid-19 | 24 April',
            fontSize: 20,
            fontColor: 'brown'
        },
        legend: {
            display: true,
            position: 'top',
            align: 'center',
            fullWidth: 'true',
            backgroundColor: 'gray'
        },
        scales: {
            yAxes: [ {
                ticks: {
                    min:0,
                    max:25000,
                    stepSize:5000
                }
            } ]
        }
     }   // end options object
    });   // chart1
}   // function





//-------------------------------

function chart2()
{
    let myChart = document.getElementById('myChart2');
    let chart1 = new Chart(myChart, {
 //  chart elemnts
     type: 'horizontalBar',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {

        labels: xlabels,
       
        datasets: [{
            label: '#Total Deaths',
          //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
             backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            data: xdata
        }],
        
     },
     options: {
        title: {
            display: true,
            text: 'Covid-19 | 24 April',
            fontSize: 20,
            fontColor: 'brown'
        },
        
        legend: {
            display: true,
            position: 'right'
        },
        animation: {
           // animateScale: true,
           // animateRotate: true
        },
        scales: {
            yAxes: [ {
                ticks: {
                    min:0,
                    max:25000,
                    stepSize:5000
                }
            } ]
            
        }
     }

    });   // chart2

}


//-------------------------------

function chart3()
{
    let myChart = document.getElementById('myChart3').getContext('2d');
   
    let chart1 = new Chart(myChart, {
 //  chart elemnts
     type: 'pie',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {

        labels: xlabels,
       
        datasets: [{
            label: '#Total Deaths',
          //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
             backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            data: xdata
            
        }],
        
     },
     options: {
        title: {
            display: true,
            text: 'Covid-19 | 24 April',
            fontSize: 20,
            fontColor: 'brown'
        },
        
        legend: {
            display: true,
            position: 'right'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
 
     }

    });   // chart3
}

//-------------------------------

function chart4()
{
    let myChart = document.getElementById('myChart4').getContext('2d');
     
    let chart1 = new Chart(myChart, {
 //  chart elemnts
     type:'doughnut',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {

        labels: xlabels,
       
        datasets: [{
            label: '#Total Deaths',
          //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
             backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            data: xdata
            
        }],
        
     },
     options: {
        title: {
            display: true,
            text: 'Covid-19 | 24 April',
            fontSize: 20,
            fontColor: 'brown'
        },
        
        legend: {
            display: true,
            position: 'right'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
 
     }

    });   // chart4
}
