   
  function builtcharts(age){
    d3.csv("mvp_winners.csv").then(function(Data) {
     
     var age_filter = Data.filter(d => d.Age== age);
     console.log(age_filter)
    
     var Player_col = age_filter.map(function(Y) { return Y.Player });
     console.log(Player_col)
    
     var PER_col = age_filter.map(function(P) { return P.PER });
     console.log(PER_col)
  
     var points_col = age_filter.map(function(Pt) { return Pt.PTS });
     console.log(points_col)
 
     var TSR_col = age_filter.map(function(T) { return T.TS});
     console.log(TSR_col)

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
 
   }
    
  function init(){
    var dropdown  = d3.select("#selDataset")
    d3.csv("mvp_winners.csv").then((data) => {
    
       
      data.forEach((age_filter)=>{
        dropdown.append("option").text(age_filter.Age).property("value",age_filter.Age);
          
       });
     

     
    
    });
  }
  init()
        
