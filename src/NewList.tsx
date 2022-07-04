import { useRecoilValue, useSetRecoilState } from 'recoil';
import { inprogressListState, newListState } from './recoil';

function NewList() {
    const newList = useRecoilValue(newListState);
    const setInprogress = useSetRecoilState(inprogressListState);

    const handleClick = (id: any) => () => {
        setInprogress(id);
    };

    return (
        <div className='col'>
            <h3>New</h3>
            <ul>
                {newList.map((item: any) => (
                    <li key={item.id}>
                        {item.content}
                        <button onClick={handleClick(item.id)}>In-Progress</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NewList