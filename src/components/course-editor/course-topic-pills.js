import React from 'react'


export default class topicsPills extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="nav nav-tabs">
                {
                    this.props.topics.map((topic, key) =>
                        <li className="nav-item" key={key}>
                            {
                                this.props.editing(topic) &&
                                <div className={"nav-link active"}>
                                    <input type="text" placeholder={`editing ${topic.title}`}/>
                                    <i className="fas fa-times wbdv-tab"></i>
                                    <i className="fas fa-check"></i>
                                </div>
                            }
                            {
                                !this.props.editing(topic) &&
                                <a className={`nav-link ${topic.status}`}>
                                    {topic.title}
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