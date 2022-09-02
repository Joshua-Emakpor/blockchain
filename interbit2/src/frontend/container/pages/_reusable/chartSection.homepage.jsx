import React from 'react'
import currencyAndValue from './currenciesValues';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data

const pdata2 = currencyAndValue

const Chart = () => {
     return (
          <div style= {{ padding: '60px 0px', textAlign: 'center'}}>
               
			<h1 className="text-heading" >
				Today's CryptoCurency Exchange Rate
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata2} margin={{ right: 20 }}>
					{/* <CartesianGrid /> */}
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis > <h1>currency</h1></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="value"
						stroke="green" activeDot={{ r: 9 }} />
					<Line dataKey="name"
						stroke="red" activeDot={{ r: 8 }} />
						<Line dataKey="cur"
							stroke="blue" activeDot={{ r:7 }} />
				</LineChart>
			</ResponsiveContainer>

          </div>
     )
}

export default Chart