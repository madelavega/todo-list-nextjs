'use client'

import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton, ListItem, ListItemText} from '@mui/material';
import TaskLifeTime from './TaskLifetime';
import {useRouter} from "next/navigation";

const removeTask = async (taskDescription) => {
    const res = await fetch('http://localhost:3000/api/tasks', {
        method: 'DELETE',
        body: JSON.stringify({taskDescription})
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res
}

const Task = ({task}) => {
    const router = useRouter()
    const onRemoveTask = async () => {
        await removeTask(task.description);
        router.refresh()
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="Borrar" onClick={onRemoveTask} color="primary">
                    <DeleteIcon/>
                </IconButton>
            }
        >
            <ListItemText primary={task.description} secondary={<TaskLifeTime creationDate={task.creationDate}/>}/>
        </ListItem>
    );
};

export default Task;
