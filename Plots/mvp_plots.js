// Load data csv
d3.csv("mvp_winners.csv").then(function(Data) {

  // Print the Data  
  console.log(Data);

  users_year_choice = int (input ( "Type a year betweet 1567 and 2016"))
  var samples = Data.Year.filter(s == s.users_year_choice)
  var years = samples.map(function(year) {
    return year;

  } 
   
}


    data = [{
    type: 'scatterpolar',
    r: [39, 28, 8, 7, 28, 39],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself'
  }]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    showlegend: false
  }
  
  Plotly.newPlot("myDiv", data, layout)
})