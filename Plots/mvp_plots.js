import d3
import dash
import dash_core_components as dcc
import dash_html_components as html

// Load data csv
d3.csv("mvp_winners.csv").then(function(Data) {

  // Print the Data  
  console.log(Data);

  start = Data.Year(1567)
  end = Data.Year(2016)

  app = dash.Dash()

  app.layout = html.Div(shooting =[

    html.Div(shooting= ''''
        symbol to graph:
    '''),

    dcc.Input( id ='input', value= '', type= 'text')


  ])

  if __name__ = '__main__':
  app.run_server(debug=True)


  //users_year_choice = int (input ( "Type a year betweet 1567 and 2016"))
  //var samples = Data.Year.filter(s == s.users_year_choice)
  //var years = samples.map(function(year) {
    //return year;

  //} 
   
//}


    //data = [{
    // type: 'scatterpolar',
    // r: [39, 28, 8, 7, 28, 39],
    // theta: ['A','B','C', 'D', 'E', 'A'],
    // fill: 'toself'
  //}]
  
  //layout = {
    //polar: {
      //radialaxis: {
        //visible: true,
        //range: [0, 50]
      //}
    //},
    //showlegend: false
  //}
  
  //Plotly.newPlot("myDiv", data, layout)
//})