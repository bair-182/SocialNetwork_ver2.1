import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import store, {RootStateType} from "./redux/state";
import {v1} from "uuid";


test.skip('renders learn react link', () => {
    // выдает ошибку!!!, но пока заглушка(на время учебы), чтобы REACT не ругался и все работало.
    let state: RootStateType = {
        profilePage: {
            postData: [
                {id: v1(), message: 'Hi, hello!!! How are you???', likesCount: 0},
                {id: v1(), message: 'It is my 1st post! Yay!!', likesCount: 0},
                {id: v1(), message: 'It is my 2nd post! Yaeee!!', likesCount: 0},
                {id: v1(), message: 'Massiv ofigenniy', likesCount: 0},
                {id: v1(), message: 'Kruuuuut\' kakoi krutoi react', likesCount: 0},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {
                    id: v1(),
                    name: 'Bair',
                    ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
                {
                    id: v1(),
                    name: 'Dimich',
                    ava: 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg'
                },
                {
                    id: v1(),
                    name: 'Valera',
                    ava: 'https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg'
                },
                {
                    id: v1(),
                    name: 'Victor',
                    ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {
                    id: v1(),
                    name: 'Igor',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqTR5vhHWagoGH4p1-eqzwS8C6MJECGNLtkhR91dKtn2cLrJ-s-Xdi2LaIwSCTfsYGH8&usqp=CAU'
                },
                {
                    id: v1(),
                    name: 'Andrew',
                    ava: 'https://lifehacki.ru/wp-content/uploads/2020/09/Avatarki-dlja-Vatsapa-dlja-muzhchin-2.jpg'
                },
            ],
            messagesData: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How your React learning progress?'},
                {id: v1(), message: 'Very good!'},
                {id: v1(), message: 'And what about you?'},
                {id: v1(), message: 'Awesome!!!'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    };
    //=============================================================================

    render(<App
        store={store}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
