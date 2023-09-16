'use client'

import {useState} from 'react';
import {Button, TextField, Grid} from '@mui/material';
import {useRouter} from "next/navigation";

const addTask = async (task) => {
    const res = await fetch('http://localhost:3000/api/tasks', {method: 'POST', body: JSON.stringify({task})})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Header = () => {
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const router = useRouter()
    const onTareaInputChange = synthEvt => {
        setNewTaskDescription(synthEvt.target.value);
    };

    const onAddTaskClicked = async () => {
        await addTask(newTaskDescription);
        router.refresh()
        setNewTaskDescription('');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    placeholder="Tarea a realizar"
                    label="Tarea"
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={newTaskDescription}
                    variant="standard"
                    onChange={onTareaInputChange}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onAddTaskClicked} disabled={!newTaskDescription.length}>
                    Añadir
                </Button>
            </Grid>
        </Grid>
    );
};

export default Header;
