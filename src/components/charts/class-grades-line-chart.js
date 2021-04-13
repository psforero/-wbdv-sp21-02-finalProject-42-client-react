import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'Q1-A',
        Math: 86,
        English: 97,
        Spanish: 79,
        Science: 97,
        Elective: 86,
        History: 98,
    },
    {
        name: 'Q1-B',
        Math: 90,
        English: 97,
        Spanish: 87,
        Science: 90,
        Elective: 94,
        History: 92,
    },
    {
        name: 'Q2-A',
        Math: 87,
        English: 92,
        Spanish: 95,
        Science: 84,
        Elective: 84,
        History: 88,
    },
    {
        name: 'Q2-B',
        Math: 95,
        English: 87,
        Spanish: 86,
        Science: 92,
        Elective: 88,
        History: 90,
    },
    {
        name: 'Q3-A',
        Math: 86,
        English: 97,
        Spanish: 79,
        Science: 84,
        Elective: 84,
        History: 88,
    },
    {
        name: 'Q3-B',
        Math: 87,
        English: 92,
        Spanish: 79,
        Science: 84,
        Elective: 84,
        History: 90,
    },
    {
        name: 'Q4-A',
        Math: 87,
        English: 92,
        Spanish: 79,
        Science: 84,
        Elective: 84,
        History: 90,
    },
    {
        name: 'Q4-B',
        Math: 70,
        English: 89,
        Spanish: 69,
        Science: 90,
        Elective: 79,
        History: 87,
    },
];

export default class ClassGradesLineChart extends PureComponent {
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

        this.colors = ['#8884d8',
            '#82ca9d',
            '#e1886b',
            '#4260b5',
            '#a93030',
            '#0a2b43'];
        this.classNames = [
            'Math',
            'English',
            'Spanish',
            'Science',
            'Elective',
            'History'
        ]
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="85%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    {
                        data.map((item, index) =>
                            <Line type="monotone" dataKey={this.classNames[index]} stroke={this.colors[index]}/>
                        )
                    }
                    {/*<Line type="monotone" dataKey="Math" stroke="#8884d8" activeDot={{ r: 8 }}/>*/}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}