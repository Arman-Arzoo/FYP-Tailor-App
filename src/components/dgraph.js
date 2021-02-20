import React from "./react"
import { Line,defaults} from 'react-chartjs-2'
defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

function Dgraph() {
    const data={
        labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'jun','jul','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
                    {
                      label: 'Sales for 2020(M)',
                      data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3]
        },
           {
                      label: 'Sales for 2021(M)',
                      data: [1, 1, 3, 5, 2, 3,2, 9, 3, 5, 0, 3]
        }
        ]
        }
        return <Line data={data} />
   
  }
  export default Dgraph;