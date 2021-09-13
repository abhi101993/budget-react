import React from 'react';
import { Segment,Grid} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';



const DisplayBalances = ({totalIncome,totalExpenses}) => {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance size='tiny' label='Income:' value={totalIncome} color='green' style={{textAlign:'left'}}/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance size='tiny' label='Expenses:' value={totalExpenses} color='red' style={{textAlign:'left'}}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>       
    )
}

export default DisplayBalances
