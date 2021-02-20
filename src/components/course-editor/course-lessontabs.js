import React from 'react'


export default class lessonsPills extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="nav nav-tabs">
                {
                    this.props.lessons.map((lesson, key) =>
                        <li className="nav-item" key={key}>
                            {   this.props.editing(lesson) &&
                            <div className={"nav-link active"}>
                                <input type="text" placeholder={`editing ${lesson.title}`}/>
                                <i className="fas fa-times wbdv-tab"></i>
                                <i className="fas fa-check"></i>
                            </div>
                            }
                            {
                                !this.props.editing(lesson) &&
                                <a className={`nav-link ${lesson.status}`}>
                                    {lesson.title}
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            }
                        </li>
                    )
                }
            </li>
        )
    }
}