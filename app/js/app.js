

Chart.defaults.font.family = 'Poppins';
Chart.defaults.font.size = 12;
Chart.defaults.font.weight = 500;




const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Revenue',
    borderWidth: '1',
    pointStyle:'rect',
    backgroundColor: 'rgb(255,135,123)',
    borderColor: 'rgb(255,135,123)',
    // data: [250, 120, 280, 150, 150, 120, 150, 170, 180, 150, 220, 160]
 
  },{
    label: 'Revenue',
    borderWidth: '1',
    pointStyle:'rect',
    backgroundColor: 'rgb(168,137,233)',
    borderColor: 'rgb(168,137,233)',
    // data:  [150, 210, 120, 280, 170, 180, 220, 130, 200, 140, 120, 180]
    
  },{
    label: 'Revenue',
    borderWidth: '1',
    pointStyle:'rect',
    backgroundColor: 'rgb(91,204,255)',
    borderColor: 'rgb(91,204,255)',

    
  }]
};



const config = {
  type: 'line',
  data: data,
  options: {
    // responsive: true,
    layout:{

    },
    plugins: {   
      legend: {
        display:false,
      },
      title:{
        color: 'pink',
      },
    },
    maintainAspectRatio: false,
    scales:{
      x:{
        grid:{
          backgroundColor:'white',
          display: false,
          drawBorder:false,
        },
        ticks:{
          color: 'white'
        }
      },
      y:{
        ticks:{
          stepSize:100,
          color: 'white'
        },
        grid:{
          drawBorder:false,
        }
      }
    }
  },
};

//Rendering
const myChart = new Chart(
  document.getElementById('myChart'),
  
  config
  
);


                       
let number = document.getElementById("chart-number");
let counter = 0;
setInterval(()=> {
    if(counter == 150){
clearInterval();
    }else{  
    counter += 1;
    number.innerHTML = "$" + counter ;
    }
}, 20)




// var container = $('div.container');

// $('input#get').click(function(){
//   $.ajax({
//     type: 'GET',
//     url: '/js/data.json',
//     dataType: 'json',
//     success: function(data){
//       $.each(data, function(index, item){
//         $.each(item, function(key, value){
//           container.append(key + ': ' + value + '<br>');
//         });
//         container.apppend('<br/></br>')
//       })
//     } 
//   })
// })


$.ajax("data.json").done(function (response) {
  myChart.data.datasets[0].data = response.data1;
  myChart.data.datasets[1].data = response.data2;
  myChart.data.datasets[2].data = response.data3;
  myChart.update();
});

