import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default class ClassGradesBarChart extends PureComponent {
  constructor(props) {
    super(props)
    this.data = []
    for (let grade of props.student.grades) {
      this.data.push({
        grade: grade.grade,
        class: grade.title
      })
    }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={this.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="class"/>
          <YAxis type="number" domain={[0, 100]}/>
          <Tooltip/>
          <Bar dataKey="grade" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}