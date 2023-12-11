import style from '../assets/style/stylesheet.module.css';
import EditBook from './EditBook';
import { useState } from 'react';

function Book({ book, submitDelete, submitEdit}) {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={style.body_container_row}> 
            {isEditing && (
                <EditBook 
                    book={book}
                    onSubmit={submitEdit}
                    closeModal={() => {
                        setIsEditing(false)
                    }}
                />
            )}
            <div key={book.id} className={style.body_row}>
                <div className={style.body_row_item}>{book.title}</div>
                <div className={style.body_row_item}>{book.subTitle}</div>
                <div className={style.body_row_item}>{book.authorFirstname}</div>
                <div className={style.body_row_item}>{book.authorLastname}</div>
                <div className={style.body_row_item}>{book.year}</div>
                <div className={style.body_row_item}>{book.pages}</div>
                    <div className={style.update_button}>
                        <button 
                            className={style.edit_button}
                            onClick={() => setIsEditing(book)}>
                            Edit
                        </button>
                    </div>
                    <div className={style.update_button}>
                        <button 
                        className={style.delete_button}
                        onClick = {() => submitDelete(book.id)}>
                            Delete
                        </button>
                    </div>
            </div>
        </div>
    )
}
    
export default Book;