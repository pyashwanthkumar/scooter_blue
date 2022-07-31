import { Box, createTheme, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ListField = (props) => {
    const {options} = props

    //https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript

    const romanize = (num) => {
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
    }

    const theme = createTheme({
        typography: {
          subtitle1: {
            fontSize: 14,
          },
          body1: {
            fontWeight: 500,
          },
          button: {
            fontStyle: 'italic',
          },
        },
      });

    return (
        <Box width="75%">
            {options.map((data, id) => (
                <ThemeProvider key={id} theme={theme}>
                    <Typography variant="subtitle1">{romanize(id + 1)}.   {data}</Typography>
                </ThemeProvider>
            ))}
        </Box>
    )
}

export default ListField