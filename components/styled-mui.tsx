import { styled } from '@mui/material/styles';
import { ButtonUnstyled } from '@mui/base';
import { TextField } from '@mui/material';

const GreenButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.95rem;
    background-color: rgb(34 197 94);
    padding: 8px 24px;
    border-radius: 4px;
    border: 1px solid rgb(34 197 94);
    color: white;
    transition: all 150ms ease;
    cursor: pointer;

    &:hover {
    background-color: rgb(34 197 94);
    border: 1px solid yellow;
    color: white;
}
`

const GrayButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    background-color: black;
    padding: 8px 24px;
    border-radius: 4px;
    border: 2px solid rgb(34 197 94);
    color: black;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
    background-color: black;
    font-size: 1rem;
    border: 2px solid rgb(34 197 94);
    color: white;
}
`

const GreenTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      color: "rgb(255 255 255)"
    },
    "& label.Mui-focused": {
      color: "rgb(34 197 94)"
    },
    "& label": {
      color: "rgb(34 197 94)"
    },
  
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(34 197 94)"
    },
  
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(34 197 94)"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(34 197 94)"
      }
    }
  });
  

export {
    GreenButton,
    GreenTextField,
    GrayButton
}