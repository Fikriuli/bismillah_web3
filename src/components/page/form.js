import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'

class form extends React.Component{
    render(){
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Form>
                        <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='Nama'
                                    placeholder='Nama'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Email'
                                    placeholder='Email'
                                />
                                </Form.Group>
                                <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Pertanyaan/saran/kritik'
                                placeholder='Tulis pesanmu disini'
                                />
                                <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='kirim'
                                />
                            </Form>    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default form