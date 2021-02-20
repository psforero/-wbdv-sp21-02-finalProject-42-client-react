import React from 'react'
import ModuleListItem from "./course-module-list-item"

export default class ModuleList extends React.Component {
    constructor(props){
        super(props);
        this.state = { modules: [
                {title: 'Module 1 - jQuery', id:123},
                {title: 'Module 2 - React', id:234, status:'active'},
                {title: 'Module 3 - Redux', id:345},
                {title: 'Module 4 - Angular', id:456, editing:'editing'},
                {title: 'Module 5 - Node.js', id:567},
                {title: 'Module 6 - MongoDB', id:678}
            ]
        }
    }

    render(){
        return(
            <ul className = "list-group">
                {
                    this.state.modules.map((module) =>
                    <ModuleListItem
                        module={module}
                        editing={this.props.editing}
                    />)
                }
                <li className={"list-group-item text-center"}>
                    <i className="fas fa-plus fa-3x wbdv-color-primary"></i>
                </li>
            </ul>
        )
    }
}