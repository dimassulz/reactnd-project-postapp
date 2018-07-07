import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryList from '../../category/views/List'
import PostList from '../../post/views/List'
import { loadDefault } from '../actions'
import Sorted from '../../sort/views/Sorted'

class Default extends Component {
  componentDidMount() {
    this.props.initialize()
  }

  render() {
    const { categories, posts } = this.props
    return (
      <div>
        <div>
          <CategoryList categories={categories}/>
          <br />
          <Sorted list={posts}>
            {list => <PostList list={list}/>}
          </Sorted>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, posts }) => ({
  categories: Object.values(categories),
  posts: Object.values(posts)
})

const mapDispatchToProps = (dispatch) => ({
  initialize() {
    dispatch(loadDefault())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)
