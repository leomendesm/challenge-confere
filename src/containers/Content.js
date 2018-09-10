import React, {Component} from 'react'
import styled from 'styled-components'
import { Card } from '../components'
import {connect} from 'react-redux'

const List = styled.div`
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
`

class ContentList extends Component {
    render(){
        let contents = []
        if(!this.props.contents.isFetching && this.props.contents.isFetching !== null){
            console.log(this.props.contents.data)
            contents = this.props.contents.data.map((c,i) => <Card name={c.name} thumbUrl={c.thumb_url} key={i} />)
        }
        return (
            <List>{contents}</List>
        )
    }
}

const mapStateToProps = state => ({
    contents: state.contents
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
