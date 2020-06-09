 function builtcharts(player){
    d3.csv("static/mvp_winners.csv").then(function(Data) {
     
     var player_filter = Data.filter(d => d.Player == player);
     console.log(player_filter)
    
     var year_col = player_filter.map(function(Y) { return Y.Year });
     console.log(year_col)
    
     var games_col = player_filter.map(function(G) { return G.G });
     console.log(games_col)
  
     var points_col = player_filter.map(function(Pt) { return Pt.PTS });
     console.log(points_col)
 
     var TSR_col = player_filter.map(function(T) { return T.TS});
     console.log(TSR_col)

     var Games = {
      x: year_col,
      y: games_col,
      type: 'scatter',
      name: 'Games'
    };
    
    var Points = {
      x: year_col,
      y: points_col,
      type: 'scatter',
      name: 'Points'
    };

    var TRS = {
      x: year_col,
      y: TSR_col,
      type: 'scatter',
      name: 'TSR'
    };
    
    var data = [Games, Points,TRS ];

    var layout = {
      title: '',
     
            
      xaxis: {
        title: 'Year',
       
      },
      yaxis: {
        title: ' ',
        showline: false,
        color: 'white'
      }

  };
    
    Plotly.newPlot('linechart', data, layout);
  
   })
 
   }
    
  function init(){
    var dropdown  = d3.select("#selDataset")
    d3.csv("mvp_winners.csv").then((data) => {
    
       
      data.forEach((player_filter)=>{
        dropdown.append("option").text(player_filter.Player).property("value",player_filter.Player);
          
       });
     

     
    
    });
  }
  init()


  
   
     