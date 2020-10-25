import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './card.js';

export default function Cards(){
  return(
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card
        name = "Meghana Varanasi"
        img= "https://ca.slack-edge.com/T01B9HM9QE4-U01D6G1D47N-928656d6c1e7-512"
        github="https://github.com/Meghana-12"
        linkedin="https://www.linkedin.com/in/varanasi-meghana-1671b1192/"
        />
      </Grid>
      <Grid item xs={3}>
        <Card
        name = "Catherine Cheng"
        img= "https://ca.slack-edge.com/T01B9HM9QE4-U01DPTQ2Z7A-09d252034766-512"
        github="https://github.com/chengjieyun59"
        linkedin="https://www.linkedin.com/in/cat-cheng/"
        />
      </Grid>   
      <Grid item xs={3}>
        <Card
        name = "Nahara Johnson"
        img= "https://ca.slack-edge.com/T01B9HM9QE4-U01DETNMP4Z-d6c3a823296f-512"
        github="https://github.com/nahara7"
        linkedin="https://www.linkedin.com/in/nahara-johnson-a68789192/"
        />
      </Grid>
      <Grid item xs={3}>
        <Card
        name = " Tea Win"
        img= "https://ca.slack-edge.com/T01B9HM9QE4-U01D8ND08LC-g28660ce9f4c-512"
        github="https://github.com/tea-win"
        linkedin="http://teawin.tech/"
        />
      </Grid>
    </Grid>
  )
}
