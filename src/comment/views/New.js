import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { createComment } from '../actions'

const NewComment = ({ active, submit }) => (
  active && <Form title="Novo comentário" submitAction={submit}/>
)

const mapStateToProps = ({ commentForm }) => ({
  active: commentForm.active && commentForm.type === 'new',
  submit: createComment
})

export default connect(
  mapStateToProps
)(NewComment)
