import { atom, selector } from 'recoil';

const defaultData = [
    {
        id: 1,
        content: 'Action 1',
        status: 'new',
    },
    {
        id: 2,
        content: 'Action 2',
        status: 'inprogress',
    },
];

const listTodoState: any = atom({
    key: 'listTodo',
    default: defaultData,
});

// newListState contain list of actions have state is new
export const newListState = selector({
    key: 'newList',
    get: ({ get }) => {
        const list: any = get(listTodoState); // this is how to get the whole todo list created with atom in the above step
        return list.filter((item: any) => item.status === 'new'); // select and return whose status is new
    },
    set: ({ get, set }, newValue) => {
        const list: any = get(listTodoState);
        // create new action
        const newTodo = {
            id: new Date().getTime(),
            content: newValue,
            status: 'new'
        }
        set(listTodoState, [...list, newTodo]);
    }
});

// newListState contain list of actions have state is inprogress
export const inprogressListState = selector({
    key: 'inprogressList',
    get: ({ get }) => {
        const list: any = get(listTodoState);
        return list.filter((item: any) => item.status === 'inprogress');
    },
    set: ({ get, set }, id) => {
        const list: any = get(listTodoState);
        set(
            listTodoState,
            list.map((item: any) =>
                item.id === id ? { ...item, status: 'inprogress' } : item
            )
        );
    },
});

// newListState contain list of actions have state is completed
export const completedListState = selector({
    key: 'completedList',
    get: ({ get }) => {
        const list: any = get(listTodoState);
        return list.filter((item: any) => item.status === 'completed');
    },
    set: ({ get, set }, id) => {
        const list: any = get(listTodoState);
        set(
            listTodoState,
            list.map((item: any) =>
                item.id === id ? { ...item, status: 'completed' } : item
            )
        );
    },
});