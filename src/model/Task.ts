interface Task {
    id: number;
    title: string;
    desc: string;
    dueDate?: Date;
    status: boolean;
}

export default Task;