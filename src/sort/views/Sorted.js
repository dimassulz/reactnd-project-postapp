import React from 'react'
import { connect } from 'react-redux'
import SortControl from './Control'

const Sorted = ({ withControl, sortedList, children}) => (
  <div>
    {withControl && <SortControl/>}
    {children(sortedList)}
  </div>
)

const mapStateToProps = ({ sortOption }, { list }) => ({
  withControl: Array.isArray(list) && list.length > 1,
  sortedList: list.sort(compare(sortOption))
})

const compare = ({ field, order }) => (a, b) => (
  order * (a[field] - b[field])
)

export default connect(
  mapStateToProps
)(Sorted)
