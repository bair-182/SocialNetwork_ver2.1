import React from "react";
import {postItemType} from "../components/Profile/Profile";


let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, hello!!! How are you???', likesCount: 12},
            {id: 2, message: 'It is my 1st post! Yay!!', likesCount: 5},
            {id: 3, message: 'It is my 2st post! Yaeee!!', likesCount: 2},
            {id: 4, message: 'Massiv ofigenniy', likesCount: 2},
            {id: 5, message: 'Eeeeeiiiiibaaat\' kakoi krutoi react', likesCount: 2},
        ],
       //newPostText: ''
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Bair', ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
            {id: 2, name: 'Dimich', ava: 'https://static.wikia.nocookie.net/despicableme/images/e/e7/Kevin_minions_2015_.png'},
            {id: 3, name: 'Valera', ava: 'https://static.wikia.nocookie.net/despicableme/images/8/8a/9OWIHvkWrgM.jpg/revision/latest?cb=20201229130421&path-prefix=ru'},
            {id: 4, name: 'Victor', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 5, name: 'Igor', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqTR5vhHWagoGH4p1-eqzwS8C6MJECGNLtkhR91dKtn2cLrJ-s-Xdi2LaIwSCTfsYGH8&usqp=CAU'},
            {id: 6, name: 'Andrew', ava: 'https://lifehacki.ru/wp-content/uploads/2020/09/Avatarki-dlja-Vatsapa-dlja-muzhchin-2.jpg'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How your React learning progress?'},
            {id: 3, message: 'Very good!'},
            {id: 4, message: 'And what about you?'},
            {id: 5, message: 'Awesome!!!'},
        ],
        // avaData: [
        //     {id: 1, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        //     {id: 2, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        //     {id: 3, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        //     {id: 4, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        //     {id: 5, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        //     {id: 6, ava: 'https://live.staticflickr.com/2883/10643657485_30bdf4ce0b_z.jpg'},
        // ]
    },
    sidebar: {},
};

// const changePostText = (text: string) => {
//
// }

export let addPost = (postMessage: string) => {
    let newPost = { id: 6, message: postMessage, likesCount: 0 }
    state.profilePage.postData.push(newPost);
}



export default state;