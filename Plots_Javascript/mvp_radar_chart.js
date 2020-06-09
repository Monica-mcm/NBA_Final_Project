   
//  function builtcharts(year){


    d3.csv("mvp_winners.csv").then(function(Data) {
    
    console.log(Data);

    
    //radar chart     
    //var fliter_year = Data.filter(d => d.Year == year);

    var PER_col = Data.map(function(P) { return P.PER });
    console.log(PER_col)

    var Player_col = Data.map(function(PY) { return PY.Player });
    console.log(Player_col)
     
    data = [{
      type: 'scatterpolar',
      r: PER_col,
      theta: Player_col,
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
    
    
    Plotly.newPlot("radar_chart", data, layout)
    

  })
            
 //   });
  // }
 // //
    
//  function init(){
//    var dropdown  = d3.select("#selDataset")
//    d3.csv("mvp_winners.csv").then((data) => {
//    
//      
//      data.forEach((fliter_year)=>{
//        dropdown.append("option").text(fliter_year.Year).property("value",fliter_year.Year);
//      });
//     
//    
//    });
//  }
//  init()