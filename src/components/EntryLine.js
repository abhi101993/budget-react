import React,{Fragment} from 'react';
import {Segment,Grid, Icon} from 'semantic-ui-react';



const EntryLine = ({id,description,value,isExpense=false,deleteEntry,editEntry}) => {
    return (
        <Fragment>
        <Segment color={isExpense?'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'  onClick={() => editEntry(id)} bordered />
              <Icon name='trash' onClick={() => deleteEntry(id)} bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
       </Segment>
       </Fragment>
    )
}

export default EntryLine
