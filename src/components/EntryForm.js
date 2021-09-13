import React from 'react'
import { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({description,value,isExpense,setDescription,setValue,setIsExpense}) => {
    return (
        <Fragment>
        <Form.Group>
         <Form.Input
          icon='tags'
          width={12}
          label='description'
          placeholder='New shiny thing'
          value = {description}
          onChange = {(event) => setDescription(event.target.value)}
          />
          <Form.Input 
          width={4}
          label='value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          value = {value}
          onChange = {(event) => setValue(event.target.value)}
          />
        </Form.Group>
        <Segment>
          <Checkbox toggle label='isExpense' checked={isExpense} onChange={() => setIsExpense(prevExpense => !prevExpense)}/>
        </Segment>
        </Fragment>
    )
}

export default EntryForm
