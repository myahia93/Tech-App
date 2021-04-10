import React, { Component } from 'react'

export class RecordList extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.libelle}</td>
            </tr>
        )
    }
}

export default RecordList
