import React from 'react';
import './App.css';
import {Dialog} from "../common/Dialog";
import {ConfirmDialog} from "../common/ConfirmDialog";

export const App = props => {
    return <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet corporis cumque dolores esse expedita
            facere hic illum minus nisi pariatur praesentium quasi quis quo, reiciendis repudiandae voluptas
            voluptate.</p>
        <Dialog title={"Witamy"}>
            <h1>Tytuł okna</h1>
            <p>Opis 1</p>
            <p>Opis 2</p>
        </Dialog>
        <Dialog>
            Kolejny dialog
        </Dialog>
        <ConfirmDialog title={"Czy zgadzasz się z nami?"}>
            Jesteś pewien
        </ConfirmDialog>
        <p>Aliquid cupiditate delectus dignissimos, doloremque, explicabo hic laudantium
        necessitatibus nesciunt nulla odit optio qui quia quisquam rerum tempore. Iusto labore nihil possimus! Ab
        accusantium nesciunt quis totam veritatis? Eligendi, fuga?</p><p>Dolor enim illum, labore laborum molestiae
        molestias praesentium? A accusantium cupiditate dicta esse et ex expedita incidunt maxime nemo neque,
        perferendis quibusdam recusandae similique sit soluta suscipit ullam voluptatibus voluptatum.</p><p>Accusamus
        adipisci aspernatur, assumenda blanditiis cupiditate debitis dignissimos doloremque eos exercitationem fuga
        fugit id illum in ipsa laudantium odio porro quia quis quisquam quo quos rem sed sit tenetur vel?</p>
    </>

};


