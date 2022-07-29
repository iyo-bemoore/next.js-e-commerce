import styles from "./Hero.module.css";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import leftImg from '../../assets/images/slide-1-2.png';
const Hero = () => {
  return (
    <Box className={styles.box}>
    <Container maxWidth='lg' >
        <Grid container  style={{border:'1px solid black'}} spacing={2} >
           <Grid item md={7} sm={12}>
            <Box className={styles.box_left} >
                 Left
            </Box>
           </Grid>
           <Grid item md={4} xs={12}>
            <Box className={styles.box_right} >
              <Grid container spacing={2}>
                <Grid item xs={12}> 
                   UP
                </Grid>
                <Grid item xs={12} >
                  DOWN
                </Grid>

              </Grid>
            </Box>
           </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Hero;
