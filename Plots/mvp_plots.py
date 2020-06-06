import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd

Data = pd.read_csv("mvp_winners.csv", usecols = col_list)
col_list = ["Year", "Player", "G", "PTS", "PER", "TS%"]

start = Data["Year"]=1567
end = Data["Year"]=2016
df = Data["Player", "TS&", start, end]

app = dash.Dash()

app.layout = html.Div(shooting =[

    html.Div(shooting= ''''
        symbol to graph:
    '''),

    dcc.Input( id ='input', value= '', type= 'text'),
    html.Div(id= 'output-graph')

  ])
@app.callback (
    Output(component_id = 'output-graph', component_property = 'shooting'),
    [Input (component_id= 'input', component_property= 'value')]
    )
def upgrade_graph(input_data):
    start = Data["Year"] = 1567
    end = Data["Year"] =2016
    df = (input_data, df, start, end)

    return dcc.Graph(
        id = 'example-graph',
        figure={
            'data':[
                {'x': Data["TS&"], 'y': Data["Year"], 'type': 'line','name': input_data},
            ],
            'layout':{
                "title": input_data
            }
        }
    )

if __name__ == '__main__':
    app.run_server(debug=True)

