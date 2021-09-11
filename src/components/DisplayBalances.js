import React from 'react';
import { Segment,Grid} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';



const DisplayBalances = () => {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance size='tiny' label='Income:' value='1,045.50' color='green' style={{textAlign:'left'}}/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance size='tiny' label='Expenses:' value='623.50' color='red' style={{textAlign:'left'}}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>       
    )
}

export default DisplayBalances
