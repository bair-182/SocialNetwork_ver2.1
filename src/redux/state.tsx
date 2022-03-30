import {v1} from "uuid";

type MessagesDataType = {
    id: string
    message: string
}
type DialogsDataType = {
    id: string
    name: string
    ava: string
}
type PostDataType = {
    id: string
    message: string
    likesCount: number
}
type PostType = {
    postData: Array<PostDataType>,
    newPostText: string
}
type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: PostType
    messagesPage: MessagesPageType
    sidebar: {}
}

// let rerenderTree = () => {
//     console.log('hello render!')
// }
//
// export const subscribe = (callback: () => void) => {
//     rerenderTree = callback
// }

export type StoreType = {
    _state: RootStateType,
    subscribe: (observer: () => void) => void,
    _onChange: () => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsTypes) => void,
}

type AddPostActionType = {
    type: 'ADD-POST',
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}
type LikesCountActionType = {
    type: 'UPDATE-LIKES-COUNT',
    messageId: string,
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    body: string,
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE-TEXT',
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | LikesCountActionType
    | UpdateNewMessageActionType
    | SendMessageActionType

// export const addPostAC = (): AddPostActionType => {
//     return {
//         type: 'ADD-POST',
//     } as const
// }
// export const updateNewPostTextAC = (newtext: string): UpdateNewPostTextActionType => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: newtext,
//     } as const
// }
// export const LikesCountAC = (messageId: string): LikesCountActionType => {
//     return {
//         type: 'UPDATE-LIKES-COUNT',
//         messageId: messageId
//     } as const
// }

// export const updateNewMessageBodyAC = (textBody: string): UpdateNewMessageActionType => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT', body: textBody
//     } as const
// }
//
// export const sendMessageAC = (): SendMessageActionType => {
//     return {
//         type: 'SEND-MESSAGE-TEXT',
//     } as const
// }


const store: StoreType = {
    _state: {
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
    },
    _onChange() {
        console.log('State changed');
    },

    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            this._state.profilePage.postData.push({
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            });
            console.log('Rendered post:  ' + this._state.profilePage.newPostText)
            this._state.profilePage.newPostText = '';
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            console.log('UPDATE-NEW-POST-TEXT : ', this._state.profilePage.newPostText)
            this._onChange();
        } else if (action.type === 'UPDATE-LIKES-COUNT') {
            this._state.profilePage.postData.map(lk => lk.id === action.messageId ? lk.likesCount++ : lk)
            console.log('Likes number is UPDATED in message # ', action.messageId)
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageBody = action.body;
            this._onChange();
        } else if (action.type === 'SEND-MESSAGE-TEXT') {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messagesData.push({id: v1(), message: body});
            this._onChange();
        }
    },

    subscribe(observer) {
        this._onChange = observer;
    },
    getState() {
        return this._state;
    }
}


export default store;