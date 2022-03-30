import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {StoreType} from "./redux/state";
import Profile from "./components/Profile/Profile";

type propsType = {
    store: StoreType,
}

const App: React.FC<propsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile store={props.store}
                    />}/>
                    <Route path="/dialogs" element={<Dialogs dialogsData={props.store._state.messagesPage.dialogsData}
                                                             messagesData={props.store._state.messagesPage.messagesData}
                                                             newMessageBody={props.store._state.messagesPage.newMessageBody}
                                                             store={props.store}
                                                    />}

                    />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;