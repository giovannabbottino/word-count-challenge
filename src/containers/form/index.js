import React from "react";
import { Button, TextField, Typography } from '@mui/material/';

import "./style.scss";

function Form() {

    const [text, setText] = React.useState('');
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setText(event.target.value);
        try {
            let wordCount = text.match(/[\w-]+/g).length
            setValue(wordCount)
          } catch (e) {
            setValue(0)
          }
    };
    
    const handleClick = (event) => {
        if (value == 0) 
        {
            setText(`Some text input is required.`)
            setValue(text.match(/[\w-]+/g).length)
        }
            
    };
    

    return (
        <form>
            <TextField
                fullWidth 
                multiline
                id="text-field"
                helperText="Insert your text"
                maxRows={20}
                value={text}
                onChange={handleChange}
            />
            <Button 
                onClick={handleClick}>Send</Button>
            <Typography variant="paragraph" >
                {value} words.
            </Typography>
        </form>
    );
}

export default Form;
