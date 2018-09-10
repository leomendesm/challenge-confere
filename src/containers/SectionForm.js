import React from 'react'
import { Select, Field } from '../components'
import { connect } from 'react-redux'
import FetchContentData from '../redux-flow/reducers/contents/action-creators'

class SectionForm extends React.Component {
    handleChange = (selectedOption) => {
        console.log(selectedOption.id)
        this.props.FetchContentData(selectedOption.id)
    }
    render() {
        let options = []
        
        if(!this.props.sections.isFetching && this.props.sections.isFetching !== null)
            options = this.props.sections.data.map(o => ({"label": o.name, "id": o.id}))
        
        return (
            <Field>
                <label>Seção</label>
                <Select
                    // value={selectedOption}
                    isDisabled={this.props.sections.isFetching || this.props.sections.isFetching === null}
                    onChange={this.handleChange}
                    options={options}
                    />
            </Field>
        )
    }
}
const mapStateToProps = state => ({
    sections: state.sections
})

const mapDispatchToProps = dispatch => ({
    FetchContentData: (e) => FetchContentData(dispatch, e),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionForm)

