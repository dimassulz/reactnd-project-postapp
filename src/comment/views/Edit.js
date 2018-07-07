import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { updateComment } from '../actions'

const EditComment = ({ active, submit }) => (
  active && <Form title="Editar Comentario" submitAction={submit}/>
)

const mapStateToProps = ({ commentForm }) => ({
  active: commentForm.active && commentForm.type === 'edit',
  submit: updateComment
})

export default connect(
  mapStateToProps
)(EditComment)
