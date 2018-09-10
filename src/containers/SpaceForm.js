import React from 'react'
import Select from '../components/Select'
import Field from '../components/Field'
import { connect } from 'react-redux'
import FetchSpaceData, { SetSpaceOption } from '../redux-flow/reducers/spaces/action-creators'
import FetchSectionData from '../redux-flow/reducers/sections/action-creators'


class SpaceForm extends React.Component {
    componentWillMount(){
        this.props.FetchSpaceData()
    }
    handleChange = (selectedOption) => {
        this.props.FetchSectionData(selectedOption.id)
        this.props.SetSpaceOption(selectedOption)
    }
    render() {
        let options = []
        
        if(!this.props.spaces.isFetching && this.props.spaces.isFetching !== null)
            options = this.props.spaces.data.results.map(o => ({"label": o.name, "id": o.id}))

        return (
            <Field>
                <label>Espaço</label>
                <Select
                    isDisabled={this.props.spaces.isFetching}
                    value={this.props.spaces.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </Field>
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
