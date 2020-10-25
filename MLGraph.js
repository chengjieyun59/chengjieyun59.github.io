import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';

const positives = [43, 24, 18, 28, 25, 25, 25, 50, 43, 42, 10, 26, 48, 19, 40, 44, 13, 2, 36, 25, 30, 23, 28, 47, 26, 34, 39, 9, 25, 10]
const negatives = [-85, -57, -37, -72, -61, -80, -39, -77, -85, -64, -69, -54, -42, -70, -39, -47, -84, -59, -93, -64, -51, -53, -42, -87, -82, -45, -76, -86, -88, -46]
const data = []
for (let i = 0; i < positives.length; i += 1) {
  data.push({
    name: `${i+1}`,
    neg: negatives[i],
    pos: positives[i]
  })
}
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
  }
}));

export default function Graph (){
  const classes = useStyles();
  return(
      <BarChart
        width={1000}
        height={350}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5, right: 5, left: 5, bottom: 5,
        }}
        className={classes.root}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pos" fill="#8884d8" stackId="stack" />
        <Bar dataKey="neg" fill="#82ca9d" stackId="stack" />
      </BarChart>
    )
  }

