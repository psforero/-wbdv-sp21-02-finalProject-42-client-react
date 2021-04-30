import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={payload.name > 75 ? "#82ca9d" : "#e1886b"}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill="#82ca9d"
            />
        </g>
    );
};

export default class AverageScoreChart extends PureComponent {
    constructor(props) {
        super(props);
        this.sum = 0;
        this.totalClasses = props.student.grades.length;
        for (let grade of props.student.grades) {
            this.sum += grade.grade
        }

        this.average = Math.trunc(this.sum / this.totalClasses);

        this.data = [
            { name: this.average, value: this.average },
            { name: this.average, value: 100 - this.average },
        ];
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="85%">
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={0}
                        activeShape={renderActiveShape}
                        data={this.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#e1886b"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}