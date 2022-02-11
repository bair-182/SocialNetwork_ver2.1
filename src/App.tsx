import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postItemType} from "./components/Profile/Profile";
import Dialogs, {dialogItemType, messageItemType} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

export type propsType = {
    state: {
        profilePage: {
            postData: Array<postItemType>,
        },
        messagesPage: {
            dialogsData: Array<dialogItemType>,
            messagesData: Array<messageItemType>,
        },
    }
}

function App(props: propsType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile postData={props.state.profilePage.postData} avaLink={props.state.messagesPage.dialogsData}/>}/>
                    <Route path="/dialogs" element={<Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                                             messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
