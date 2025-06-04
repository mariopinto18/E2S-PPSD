let xdata = []; 
let xlabels= [];

let chartType= 'bar'



function getData() {     // function to push data and labels in arrays
                        // we could input data from a database or LocalStorage
    xdata.push(91, 87, 75, 62);   
    xlabels.push('Player 1', 'Player 2', 'Player 3', 'Player 4');
}

getData();
chart1()
chart2()
chart3()
chart4()






// Chart1 --------------------------------
function chart1()
{

    new Chart(document.getElementById("myChart1"), {
        
 //  chart elemnts
     type: 'bar',    // chart type: bar, pie, line, radar, polarAres, etc...

     data: {
       labels: xlabels,
        datasets: [{
            label: '#XPs',
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
        plugins: {
            title: {
                display: true,
                position: 'top',
                align: 'center',
                text: 'Leaderboard XP',
                font: {size : 24},
                color: 'blue'
            },
            legend: {
                labels: {
                    color: "green",
                },
                display: true,
                position: 'right',
                align: 'center',
                fullWidth: 'true',
                color: 'yellow'
               },
        
        },
        indexAxis: 'x',
        responsive: true,
        scales: {
            y:  {
                suggestedMin: 0,
                suggestedMax: 100
                }
            } ,

        // alterar cores das labels do gráfico -----------------------
        scales: {
            y: {
                ticks: { color: "green", font: {size : 14}},
            },
            x: {
                ticks: { color: "red" , font: {size : 14}},
            },
        },

        }    // options
  
     //}   // end options object
    });   // chart1   
}   // function



function chart2()
{
    new Chart(document.getElementById("myChart2"), {
   //  chart elemnts
     type: 'bar',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {
        fontColor: ['rgb(0,155,204)','rgb(153,153,102)'],
        labels: ['player 1', 'player 2'],
        
        datasets: [ {
            data: [60, 50],
            backgroundColor: 'lightBlue',
            hoverBackgroundColor: 'gray'
        },
        {
            data: [30, 35],
            backgroundColor: 'lightGreen',
            hoverBackgroundColor: 'lightGray'
        },
        {
            data: [10, 15],
            backgroundColor: 'gray',
            hoverBackgroundColor: 'gray'
        },
        ]       
     },
     options: {
        plugins: {
            title: {
                display: true,
                text: 'Progress User',
                font: {size : 24},
                color: 'blue'
            },
            
            legend: {
                display: false
            },
           
        },
        indexAxis: 'y',
        responsive: true, 
        scales: {
            y:  {  stacked: true },
            x: {  stacked : true }
            },
                    // Changing the label colour
            scales: {
                y: {
                    ticks: { color: "green", font: {size : 18} },
                },
                x: {
                    ticks: { color: "red" ,   font: {size : 18} },
                },
            },

        }  // options

    });   // chart2

    
}




function chart3()
{
    new Chart(document.getElementById("myChart3"), {
 //  chart elemnts
     type: 'pie',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {

        labels: ['Room 1', 'Room2', 'Room3', 'Room 4'],
       
        datasets: [{
            label: '#players in rooms',
          //  backgroundColor: ['blue', 'green', 'red', 'yellow'], 
             backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            data: [12, 8, 4, 1]
            
        }],
        
     },
     options: {
        plugins: {
            title: {
                display: true,
                text: 'Players per room',
                font: {size : 24},
                color: 'blue'
            },
            
            legend: {
                display: true,
                position: 'bottom'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
        }
     }

    });   // chart3
}

//-------------------------------

function chart4()
{
    new Chart(document.getElementById("myChart4"), {
 //  chart elemnts
     type:'doughnut',    // chart type: bar, pie, line, radar, polarAres, etc
     data: {

        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
       
        datasets: [{
            label: '#Tutorial Levels',
            backgroundColor: ['lightGreen', 'lightGreen', 'lightGreen', 'red'], 
            backgroundColor: ['rgb(0,155,204)','rgb(153,153,102)','rgb(255,153,0)' ,'rgb(222,190,0)' ],
            borderColor: 'gray',
            borderWidth: 2,
            hoverBorderWidth:4,
            hoverBorderColor: '#000',
            data: [4,4,4,4]
            
        }],
        
     },
     options: {
        plugins:{
            title: {
                display: true,
                text: 'unlocked Levels',
                font: {size : 24},
                color: 'blue'
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
     }

    });   // chart4
}
