import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface IProps {
    filterServerOperation?: any
}
export default function ServerFilter(props: IProps) {
    const [filterValue, setFilterValue] = useState("")
    const { filterServerOperation } = props;
    return <div>
        <InputGroup className="mb-3">
            <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setFilterValue(e.target.value)}
                value={filterValue}
            />
            <Button onClick={() => { filterServerOperation(filterValue) }}> add Movies From Server </Button>
            
        </InputGroup>

    </div>
}