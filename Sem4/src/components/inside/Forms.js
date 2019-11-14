import React, { useState } from 'react';
import useForm from 'react-hook-form';

import { 
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default function Forms() {
    const { handleSubmit, watch, errors, register } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Card>
                        <CardHeader>
                            <h4>Form</h4>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input type="text" name="name" placeholder="Enter name..." innerRef={register({ required: true })} />
                                    {errors.name && <span className="text-danger">Is required</span>}
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit">Submit</Button>
                                </FormGroup>
                            </form>
                        </CardBody>
                        <CardFooter>
                            Footer
                        </CardFooter>
                    </Card>
                </Col>                     
            </Row>
        </div>            
    )
}