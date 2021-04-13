import React, {useEffect, useState} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import naepService from '../../services/naep-service'
import {connect} from "react-redux";

const BarChart = (
    {
        national,
        ma,
        findNationalAvgScores,
        findStateAvgScores,
        grade
    }) => {

    const getScore = (juris, grade, sub) => {
        const result = juris.filter(record => (record.grade == grade && record.subject == sub))
        if (result[0] != undefined) {
            return result[0].score
        }
        else {
            return 0
        }
    }

    const getScores = (juri, grade) => {
        const subjects = ['MAT', 'RED', 'WRI', 'SCI']
        const data = []
        for (let sub in subjects) {
            data.push(getScore(juri, grade, subjects[sub]))
        }
        console.log(data)
        return data
    }

    const state = {
        labels: ['Math', 'Reading', 'Writing', 'Science'],
        datasets: [
            {
                label: 'National',
                backgroundColor: 'rgba(255,165,0,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: getScores(national, grade)
            },
            {
                label: 'Massachusetts',
                backgroundColor: 'rgba(0,182,255,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: getScores(ma, grade)
            },
            {
                label: 'WDLC',
                backgroundColor: 'rgba(60,179,113,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [350, 400, 300, 450]
            }
        ]
    }
    useEffect(() => {
        findNationalAvgScores(['mathematics', 'reading', 'writing', 'science'],
                                ['4', '8', '12'],
                                'NT',
                                'CURRENT')
        findStateAvgScores(['mathematics', 'reading', 'writing', 'science'],
                                ['4', '8', '12'],
                                'MA',
                                'CURRENT')
    }, [])

    return (
        <div>
            {/*<br/>*/}
            {/*<p>*/}
            {/*    national*/}
            {/*    {JSON.stringify(national)}*/}
            {/*    <br/>*/}
            {/*    getScore*/}
            {/*    {getScore(national, 8, "SCI")}*/}
            {/*    <br/>*/}
            {/*    {getScores(national, 8)}*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    mass*/}
            {/*    {JSON.stringify(ma)}*/}
            {/*</p>*/}
            <HorizontalBar
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'WDLC Performance',
                        fontSize:20
                        },
                    legend:{
                        display:true,
                        position:'right'
                        },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                        beginAtZero: true,
                                        max: 500
                                        },
                            },
                            ],
                        }
                    }}
                />
        </div>
        );
}

const stpm = (state) => ({
    national: state.scoreReducer.national,
    ma: state.scoreReducer.ma
})

const dtpm = (dispatch) => {
    return {
        findNationalAvgScores: (subjects, grades, jurisdiction, year) =>
        {
            const national = []
            const requests = grades.map(grade =>
                subjects.map(subject =>
                    naepService.findAvgScores(subject, grade, jurisdiction, year)))
            Promise.allSettled(requests).then((responses) =>
                {
                    for (let obj in responses) {
                        const promises = responses[obj].value
                        Promise.allSettled(promises)
                            .then(promises => {
                                for(let obj in promises) {
                                    const response = promises[obj].value
                                    if (response.result.length !== 0) {
                                        const result = response.result[0]
                                        const record = {
                                            grade: result.grade,
                                            subject: result.subject,
                                            score: result.value,
                                            year: result.year
                                        }
                                        national.push(record)
                                    }
                                }
                                if (obj == responses.length - 1){
                                    console.log(national)
                                    dispatch(
                                        {
                                            type: "FIND_NATIONAL_SCORES",
                                            national
                                        }
                                    )
                                }
                            })
                    }
                })

        },
        findStateAvgScores: (subjects, grades, jurisdiction, year) =>
        {
            const ma = []
            const requests = grades.map(grade =>
                subjects.map(subject =>
                    naepService.findAvgScores(subject, grade, jurisdiction, year)))
            Promise.allSettled(requests).then((responses) =>
            {
                for (let obj in responses) {
                    const promises = responses[obj].value
                    Promise.allSettled(promises)
                        .then(promises => {
                            for(let obj in promises) {
                                const response = promises[obj].value
                                if (response.result.length !== 0) {
                                    const result = response.result[0]
                                    const record = {
                                        grade: result.grade,
                                        subject: result.subject,
                                        score: result.value,
                                        year: result.year
                                    }
                                    ma.push(record)
                                }
                            }
                            if (obj == responses.length - 1){
                                console.log(ma)
                                dispatch(
                                    {
                                        type: "FIND_STATE_SCORES",
                                        ma
                                    }
                                )
                            }
                        })
                }
            })

        }
    }
};

export default connect(stpm, dtpm)(BarChart);
