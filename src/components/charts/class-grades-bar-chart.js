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
        super(props);
        this.data = [];
        for (let subjectName in props.student) {
            if (subjectName !== 'Name' &&
                subjectName !== '_sheet' &&
                subjectName !== '_rowNumber' &&
                subjectName !== '_rawData') { // THIS IS REALLY BAD!!!!
                let classAndGrade = { name: subjectName, grade: parseInt(props.student[subjectName]) }
                this.data.push(classAndGrade);
            }
        }
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="85%">
                <BarChart
                    width={500}
                    height={300}
                    data={this.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip/>
                    <Bar dataKey="grade" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}