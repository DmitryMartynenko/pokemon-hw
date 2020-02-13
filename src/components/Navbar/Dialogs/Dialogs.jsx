import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={s.message}> {props.message} </div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:'Mitya'},
        {id:2, name:'irina'},
        {id:3, name:'Nastya'},
        {id:4, name:'Alexandra'},
    ];

    let messagesData = [
        {id:1, message:'Hi, are you ok?'},
        {id:2, message:'looking foe smthg'},
        {id:3, message:'i will do it!'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                {/*<DialogItem name='Evgenii' id='2' />*/}
                {/*<div className={s.dialog}><NavLink to={'/dialogs/2'}>  Masha </NavLink>*/}
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                {/*<Message message='No its me Lul' />*/}
                {/*<div className={s.message}> How are you </div>*/}
            </div>
        </div>
    )
};




// const Dialogitem = (props) => {
//     let path ='/dialogs/'+props.id;
//     return (
//         <div className={s.dialog + ' ' + s.active}>
//             <NavLink to={path}> {props.name} </NavLink>
//         </div>
//     )
// };
//
// const Massage = (props) => {
//     return (
//         <div className={s.message}>{props.massage}</div>
//     )
// }

// const Dialogs = (props) => {
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 <Dialogitem name='Matt' id='1'/>
//                 <Dialogitem name='Andrey' id='2'/>
//                 <Dialogitem name='Sveta' id='3'/>
//                 <Dialogitem name='Sasha' id='4'/>
//                 <Dialogitem name='Igor' id='5'/>
//                 <Dialogitem name='Vlad' id='6'/>
//                 <Dialogitem name='Ramil' id='7'/>
//             </div>
//
//             <div className={s.messages}>
//                 <Massage massage="hi"/>
//                 <Massage massage="How are you<"/>
//                 <Massage massage="how doing"/>
//                 <Massage massage="how yoy "/>
//
//             </div>
//         </div>
//     )
// };

export default Dialogs;