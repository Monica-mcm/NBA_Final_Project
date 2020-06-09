   
    d3.csv("mvp_winners.csv").then(function(Data) {
    
    console.log(Data);

    
    //radar chart     
   

    var PER_col = Data.map(function(P) { return P.PER });
  //  console.log(PER_col)
//
    var Player_col = Data.map(function(PY) { return PY.Player });
  //  console.log(Player_col)
  //   
  //  data = [{
  //    type: 'scatterpolar',
  //    r: PER_col,
  //    theta: Player_col,
  //    fill: 'toself'
  //  }]
  //  
  //  layout = {
  //    polar: {
  //      radialaxis: {
  //        visible: true,
  //        range: [0, 50]
  //      }
  //    },
  //  showlegend: false
  //  }
  //  
  //  
  //  Plotly.newPlot("radar_chart", data, layout)
  //  
//
  //})
  //          
//

data = [
  {
  type: 'scatterpolar',
  r: [39, 28, 8, 7, 28, 39],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group A'
  },
  {
  type: 'scatterpolar',
  r: [1.5, 10, 39, 31, 15, 1.5],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group B'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)