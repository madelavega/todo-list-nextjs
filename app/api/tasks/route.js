import {NextRequest, NextResponse} from 'next/server'
import {revalidateTag} from 'next/cache'
import {tasks} from '@/api/db';

export async function POST(request) {
    const {task} = await request.json();
    const newTask = {description: task, creationDate: new Date().getTime()};
    tasks.push(newTask)
    revalidateTag('tasks')
    return NextResponse.json({task: newTask}, {status: 200})
}

export async function GET(request) {
    return NextResponse.json(tasks, {status: 200})
}

export async function DELETE(request) {
    const {taskDescription} = await request.json();
    tasks.splice(tasks.findIndex(({description}) => description === taskDescription), 1)
    revalidateTag('tasks')
    return new Response(null, {status: 204})
}
