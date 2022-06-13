import React from 'react';
import './Product.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

const ContactUs = () => {
    return (
        <div className="ContactUsMain">
          <Grid>
          {/* top right padding */}
          {/* margin 0 auto setting the top and bottom margins to zero, and the left and right margins to auto */}
            <Card className="ContactUsCard">
              <CardContent style={{marginTop: "100px"}}>
                <Typography variant="h5" style={{textAlign:"center"}}>
                  Contact Us
              </Typography> 
                <Typography variant="p" color="textSecondary">
                  Fill up the form and our team will get back to you within 24 hours.
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    
                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    
                      <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                   
                   
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                   
                   
                      <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                   
                   
                      <TextField label="Message" placeholder="Type your message here" variant="outlined" fullWidth required />
                   
                   
                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                   
    
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
}
export default ContactUs;



