import {Box, Grid} from '@mui/material';
import Header from '@/_components/Header';
import TasksList from '@/_components/TasksList';

const getTasks = async () => {
    const res = await fetch('http://localhost:3000/api/tasks', {next: {tags: ['tasks']}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function TodoList() {
    const tasks = await getTasks();
    return (
        <Box sx={{flexGrow: 1, margin: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12}>
                    <TasksList tasks={tasks}/>
                </Grid>
            </Grid>
        </Box>
    );
}
