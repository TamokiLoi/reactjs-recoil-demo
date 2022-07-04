import { RecoilRoot } from 'recoil';
import CompletedList from "./CompletedList";
import InProgressList from "./InProgressList";
import NewActionInput from './NewActionInput';
import NewList from "./NewList";

function App() {
    return (
        <>
            <RecoilRoot>
                <div className='App'>
                    <header className='App-header'>
                        <h1>To-do List</h1>
                    </header>
                    <NewActionInput />
                    <div className='content'>
                        <NewList />
                        <InProgressList />
                        <CompletedList />
                    </div>
                </div>
            </RecoilRoot>
        </>

    );
}

export default App;
