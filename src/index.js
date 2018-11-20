import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * A component to map over data
 */

export default class ReactMapList extends Component {
    
    render () {

        const {
            data,
            component
        } = this.props

        const ComponentToRender = component

        return data.map(
            (item, index) => <ComponentToRender key={index} {...item} />
        )

    }

}

ReactMapList.propTypes = {
   /**
   * The data which to map over
   */
  data: PropTypes.array,
  /**
   * Component to render when outputing the list
   */
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ])
}

ReactMapList.defaultProps = {
    data: [],
    component: () => null
}