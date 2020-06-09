  
  
  function builtcharts(player){


    d3.csv("mvp_winners.csv").then(function(Data) {
    
    console.log(Data);

  //line chart
  
    var player_filter = Data.filter(d => d.player == player);

    var year_col = player_filter.map(function(Y) { return Y.Year });
    console.log(year_col)

    var games_col = player_filter.map(function(G) { return G.G });
    console.log(games_col)

    var points_col = player_filter.map(function(Pt) { return Pt.PTS });
    console.log(points_col)

    var TSR_col = player_filter.map(function(T) { return T.TS});
    console.log(TSR_col)

    var x_data = year_col

    var y_data = [games_col,points_col,TSR_col]

    var colors = ['rgba(67,67,67,1)', 'rgba(115,115,115,1)', 'rgba(49,130,189, 1)'];

    var lineSize = [2, 2, 2];

    var labels = ['Games', 'Points', 'True Shooting' ];

    var data = [];

    for ( var i = 0 ; i < x_data.length ; i++ ) {
      var result = {
        x: x_data[i],
        y: y_data[i],
        type: 'scatter',
        mode: 'lines',
        line: {
          color: colors[i],
          width: lineSize[i]
        }
      };

      var result2 = {
        x: [x_data[i][0], x_data[i][11]],
        y: [y_data[i][0], y_data[i][11]],
        type: 'scatter',
        mode: 'markers',
        marker: {
          color: colors[i],
          size: 12
        }
      };
      data.push(result, result2);
    }

    var layout = {
      showlegend: false,
      height: 600,
      width: 600,
      xaxis: {
        showline: true,
        showgrid: false,
        showticklabels: true,
        linecolor: 'rgb(204,204,204)',
        linewidth: 2,
        autotick: false,
        ticks: 'outside',
        tickcolor: 'rgb(204,204,204)',
        tickwidth: 2,
        ticklen: 5,
        tickfont: {
          family: 'Arial',
          size: 12,
          color: 'rgb(82, 82, 82)'
        }
      },
      yaxis: {
        showgrid: false,
        zeroline: false,
        showline: false,
        showticklabels: false
      },
      autosize: false,
      margin: {
        autoexpand: false,
        l: 100,
        r: 20,
        t: 100
      },

      annotations: [
        {
          xref: 'paper',
          yref: 'paper',
          x: 0.0,
          y: 1.05,
          xanchor: 'left',
          yanchor: 'bottom',
          text: 'Performance per player',
          font:{
            family: 'Arial',
            size: 30,
            color: 'rgb(37,37,37)'
          },
          showarrow: false
        },

        {
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          y: -0.1,
          xanchor: 'center',
          yanchor: 'top',
          text: 'Year',
          showarrow: false,
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(150,150,150)'
          }
        }
      ]
    };

    for( var i = 0 ; i < x_data.length ; i++ ) {
      var result = {
        xref: 'paper',
        x: 0.05,
        y: y_data[i][0],
        xanchor: 'right',
        yanchor: 'middle',
        text: labels[i] + ' ' + y_data[i][0] +'%',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 16,
          color: 'black'
        }
      };

      var result2 = {
        xref: 'paper',
        x: 0.95,
        y: y_data[i][11],
        xanchor: 'left',
        yanchor: 'middle',
        text: y_data[i][11] +'%',
        font: {
          family: 'Arial',
          size: 16,
          color: 'black'
        },
        showarrow: false
      };
    
      layout.annotations.push(result, result2);
    }
    
    Plotly.newPlot('linechart', data, layout);




             
    //radar chart     
    var fliter_year = Data.filter(d => d.Year == year);

    var PER_col = fliter_year.map(function(P) { return P.PER });
    console.log(PER_col)

    var Player_col = fliter_year.map(function(PY) { return PY.Player });
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
   }
 // //
    
  function init(){
    var dropdown  = d3.select("#selDataset")
    d3.csv("mvp_winners.csv").then((data) => {
    
      
      data.forEach((player_filter)=>{
        dropdown.append("option").text(player_filter.Player).property("value",player_filter.Player);
      });
     
    
    });
  }
  init()