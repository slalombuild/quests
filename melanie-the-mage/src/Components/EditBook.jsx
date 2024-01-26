import React from 'react'
import style from '../assets/style/stylesheet.module.css';
import { useState } from 'react';

function EditBook({ book, closeModal, onSubmit }) {

    const [editedBook, setEditedBook] = useState(
        {
            id: book.id,
            title: book.title,
            subTitle: book.subTitle,
            authorFirstname: book.authorFirstname,
            authorLastname: book.authorLastname,
            year: book.year,
            pages: book.pages
        }
    );

    const handleChange = (e) => {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(editedBook);
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    }

    return (
        <div
            className={style.modal_container}
            onClick={(e) => {
            if (e.target.className === style.modal_container) closeModal();
            }}
        >
            <div className={style.modal}>
                <form>
                    <div className={style.form_group}>
                        <label className={style.font}>Title</label>
                        <input 
                            name="title" 
                            onChange={handleChange} 
                            value={editedBook.title}
                            placeholder={book.title} 
                        />
                    </div>
                    <div className={style.form_group}>
                        <label className={style.font}>Subtitle</label>
                        <input
                            name="subTitle"
                            onChange={handleChange}
                            value={editedBook.subTitle}
                            placeholder={book.subTitle} 
                        />
                    </div>
                    <div className={style.form_group}>
                        <label className={style.font}>Author Firstname</label>
                        <input 
                            name="authorFirstname" 
                            onChange={handleChange} 
                            value={editedBook.authorFirstname} 
                            placeholder={book.authorFirstname} 
                        />
                    </div>
                    <div className={style.form_group}>
                        <label className={style.font}>Author Lastname</label>
                        <input
                            name="authorLastname"
                            onChange={handleChange}
                            value={editedBook.authorLastname}
                            placeholder={book.authorLastname} 
                        />
                    </div>
                    <div className={style.form_group}>
                        <label className={style.font}>Publication year</label>
                        <input
                            name="year"
                            onChange={handleChange}
                            value={editedBook.year}
                            placeholder={book.year} 
                        />
                    </div>
                    <div className={style.form_group}>
                        <label className={style.font}>Number of Pages</label>
                        <input
                            name="pages"
                            onChange={handleChange}
                            value={editedBook.pages}
                            placeholder={book.pages} 
                        />
                    </div>
                    <div className={style.edit_button_group}>
                        <button type="submit" className={style.edit_submit_button} onClick={handleSubmit}>
                            Submit
                        </button>
                        <button type="submit" className={style.edit_cancel_button} onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
export default EditBook;