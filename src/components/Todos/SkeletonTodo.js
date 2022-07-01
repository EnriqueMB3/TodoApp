import { Skeleton } from "@mui/material";

const Container = {
    marginTop: '1em',
    marginLeft: '.5em',
    padding: '1em'
}


export const SkeletonTodo =() =>{
    return(
        <>
            <Skeleton
            sx={{ bgcolor: 'grey.100' }}
            variant="text"
            animation="wave"
            width={280}
            style={Container}
            height= {100}
            />
        </>
    );
}