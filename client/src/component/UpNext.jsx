import { Box, Typography, styled } from "@mui/material"


const UpNext = ( {movies}) => {

    return (
        <Box>
            <Typography>
                Up Next
            </Typography>
            {
                movies.map(movie => (
                    <Box>
                        <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        <Typography>{movie.original_title}</Typography>
                    </Box> 
                ))
            }
        </Box>
    )
}

export  default UpNext;