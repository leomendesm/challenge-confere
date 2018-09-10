import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import FetchSpaceData, { SetSpaceOption } from '../redux-flow/reducers/spaces/action-creators'
import FetchSectionData from '../redux-flow/reducers/sections/action-creators'
class SpaceForm extends React.Component {
    componentWillMount(){
        this.props.FetchSpaceData()
    }
    handleChange = (selectedOption) => {
        console.log(`Option selected:`)
        this.props.FetchSectionData(selectedOption.id, selectedOption)
        this.props.SetSpaceOption(selectedOption)
    }
    render() {
        let options = []
        if(!this.props.spaces.isFetching && this.props.spaces.isFetching !== null){
            options = this.props.spaces.data.results.map(o => ({"label": o.name, "id": o.id}))
            console.log(this.props.spaces.data)
        }
        return (
            <Select
                value={this.props.spaces.selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        )
    }
}
const mapStateToProps = state => ({
    spaces: state.spaces
  })

const mapDispatchToProps = dispatch => ({
    FetchSpaceData: () => FetchSpaceData(dispatch),
    FetchSectionData: e => FetchSectionData(dispatch, e),
    SetSpaceOption: e => SetSpaceOption(dispatch, e)
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceForm)

