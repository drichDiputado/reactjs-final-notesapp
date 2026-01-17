import { supabase } from '@/services/supabase';
import { Task } from '@/types';

// Add here you're table name, make sure to double check it too
// add you table name here
const tableName = 'tasks';

export const fetchTask = async (
    setGetTask: (tasks: Task[]) => void, 
    setLoading: (loading: boolean) => void
) => {
    setLoading(true);

    const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('id', { ascending: false });

    if (!error && data) {
        setGetTask(data);
    }

    setLoading(false);
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
    setLoading(true);

    await supabase.from(tableName).insert([
        {
            title: newTitle,
            description: newDesc,
        },
    ]);

    setNewTitle('');
    setNewDesc('');
    setIsAddModalVisible(false);

    const { data } = await supabase.from(tableName).select('*');

    if (data) {
        setGetTask(data);
    }

    setLoading(false);
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
    if (!selectedTask) return;

    setLoading(true);

    await supabase
        .from(tableName)
        .update({
            title: updateTitle,
            description: updateDesc,
        })
        .eq('id', selectedTask.id);

    setIsEditModalVisible(false);
    setSelectedTask(null);

    const { data } = await supabase.from(tableName).select('*');

    if (data) {
        setGetTask(data);
    }

    setLoading(false);
};

export const deleteTask = async (
    id: number,
    setGetTask: (tasks: Task[]) => void,
    setLoading: (loading: boolean) => void
) => {
    setLoading(true);

    await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

    const { data } = await supabase.from(tableName).select('*');

    if (data) {
        setGetTask(data);
    }

    setLoading(false);
};
