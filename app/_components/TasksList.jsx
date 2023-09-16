'use client'

import {Fragment} from 'react';
import {List, Box, Typography, Divider} from '@mui/material';
import Task from './Task';


const TasksList = ({tasks = []}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Typography variant="h4">Tareas</Typography>
            <Divider/>
            <List>
                {tasks.map((task, index) => (
                    <Fragment key={`task_${index}`}>
                        <Task task={task}/>
                        <Divider/>
                    </Fragment>
                ))}
            </List>
        </Box>
    );
};

export default TasksList;
