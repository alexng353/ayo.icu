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
  background-color: rgb(22 163 74);
  // border: 1px solid yellow;
  color: white;
}
`
// clear button, on hover background becomes gray and border becomes slightly lighter gray
const NavButton = styled(ButtonUnstyled)`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
  background-color: gray;
  color: white;
  text-decoration:none;
}

`
//menulist button
const GrayButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.95rem;
  background-color: black;
  padding: 8px 24px;
  border-radius: 4px;
  border: 1px solid rgb(34 197 94);
  color: white;
  transition: all 150ms ease;
  cursor: pointer;

  &:hover {
  background-color: black;
  border: 1px solid yellow;
  color: white;
}
`

// const GreenButton

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
  
const MenuButton = styled(ButtonUnstyled)`

  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.95rem;
  background-color: rgb(34 197 94);
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid white;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  
  &:hover {
  background-color: green;
  border: 1px solid white;
}
`


// const NavButton = styled(ButtonUnstyled)`
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.95rem;
//   background-color: transparent;
//   padding: 8px 16px;
//   border-radius: 24px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
  
//   &:hover {
//   background-color: gray;
//   color: white;
// }

// `

export {
    GreenButton,
    GreenTextField,
    GrayButton,
    NavButton,
    MenuButton
}