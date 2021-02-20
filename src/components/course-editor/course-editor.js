import React, {useState} from 'react'
import ModuleList from "./course-modulelist";
import LessonsTabs from "./course-lessontabs";
import TopicPills from "./course-topic-pills";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    editing = (obj) => {
        let editing = false
        if (obj.editing == 'editing') {
            editing = true
        }
        return(editing)
    }

    state = {
        lessons: [
            {title: 'Unselected Lesson 1 ', id:123},
            {title: 'Selected Lesson 2 ', id:234, status: 'active'},
            {title: 'Lesson 3 ', id:345},
            {title: 'Editing Lesson 4 ', id:456, editing: 'editing'},
            {title: 'New Lesson ', id:567}
        ],
        topics: [
            {title: 'Unselected Topic 1 ', id:123},
            {title: 'Selected Topic 2 ', id:234, status: 'active'},
            {title: 'Topic 3 ', id:345},
            {title: 'Editing Topic 4 ', id:456, editing: 'editing'},
            {title: 'New Topic ', id:567}
        ]
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="form-row justify-content-start">
                    <div className="col-auto align-self-center">
                        <i onClick={() => this.props.history.goBack()}
                           className="fas fa-times fa-2x wbdv-color-primary"></i>
                    </div>
                    <div className="col align-self-center">
                        <h3 className="align-middle">
                            WebDev Selected Course
                        </h3>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-3">
                        <ModuleList
                            editing={this.editing}
                        />
                    </div>
                    <div className="col-9">
                        <LessonsTabs
                            lessons={this.state.lessons}
                            editing={this.editing}
                        />

                        <TopicPills
                            topics={this.state.topics}
                            editing={this.editing}
                        />
                    </div>
                </div>
            </div>
        )
    }
}



