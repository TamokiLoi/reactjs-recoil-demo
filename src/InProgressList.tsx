import { useRecoilValue, useSetRecoilState } from 'recoil';
import { completedListState, inprogressListState } from './recoil';

function InProgressList() {
    const inProgressList = useRecoilValue(inprogressListState);
    const setCompleted = useSetRecoilState(completedListState);

    const handleClick = (id: any) => () => {
        setCompleted(id);
    };

    return (
        <div className='col'>
            <h3>In-Progress</h3>
            <ul>
                {inProgressList.map((item: any) => (
                    <li key={item.id}>
                        {item.content}
                        <button onClick={handleClick(item.id)}>Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InProgressList