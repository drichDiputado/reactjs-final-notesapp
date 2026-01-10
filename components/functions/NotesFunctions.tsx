// import { supabase } from '@/services/supabase';
import { Task } from '@/types';
// import * as Haptics from 'expo-haptics';
// import { Alert } from 'react-native';

// Add here you're table name, make sure to double check it too
// add you table name here
const tableName = '';

export const fetchTask = async (
    setGetTask: (tasks: Task[]) => void, 
    setLoading: (loading: boolean) => void
) => {
    // fetch task: This is were you "Read/Fetch the data from you're database"
};

export const handleSubmit = async (
    newTitle: string,
    newDesc: string,
    setNewTitle: (title: string) => void,
    setNewDesc: (desc: string) => void,
    setIsAddModalVisible: (visible: boolean) => void,
    setGetTask: (tasks: Task[]) => void,
    setLoading: (loading: boolean) => void
) => {
    // handle sumbit: This is were you "Create" the data to put in you're database
};

export const updateTask = async (
    selectedTask: Task | null,
    updateTitle: string,
    updateDesc: string,
    setIsEditModalVisible: (visible: boolean) => void,
    setSelectedTask: (task: Task | null) => void,
    setGetTask: (tasks: Task[]) => void,
    setLoading: (loading: boolean) => void
) => {
   // update task: This is were you "Update" any changes you apply in the database
};

export const deleteTask = async (
    id: number,
    setGetTask: (tasks: Task[]) => void,
    setLoading: (loading: boolean) => void
) => {
    // delete task: This is were you "Delete" a notes/task
};