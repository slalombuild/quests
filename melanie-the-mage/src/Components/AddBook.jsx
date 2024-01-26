import { useState } from "react";
import style from '../assets/style/stylesheet.module.css';
import book2 from '../assets/images/book2.png';

const initialValues = {
    id: '',
    title: '',
    subTitle: '',
    authorFirstname: '',
    authorLastname: '',
    year: '',
    pages: ''
};

const AddBook = ({onSubmit}) => {

    const [newBook, setNewBook] = useState(initialValues);

    const handleChange = (e) => {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newBook);
        setNewBook(initialValues);
    }

    return (
        <div className={style.head_text}>
            <div >
                <img src={book2} alt = "Book 2 Background"/>
            </div>
            <div className={style.text_on_image}>
                <div className={style.add_book_title}><h2>Add Book to Shelf</h2></div> 
                <div>
                    <form>
                        <div className={style.book_form}>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Title
                                </label>
                                <input
                                    type='text'
                                    value={newBook.title}
                                    name="title"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Subtitle
                                </label>
                                <input
                                    type='text'
                                    value={newBook.subTitle}
                                    name="subTitle"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Author Firstname
                                </label>
                                <input
                                    type='text'
                                    value={newBook.authorFirstname}
                                    name="authorFirstname"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Author Lastname
                                </label>
                                <input
                                    type='text'
                                    value={newBook.authorLastname}
                                    name="authorLastname"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Year
                                </label>
                                <input
                                    type='text'
                                    value={newBook.year}
                                    name="year"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.book_row}>
                                <label className={style.font}>
                                    Pages
                                </label>
                                <input
                                    type='text'
                                    value={newBook.pages}
                                    name="pages"
                                    className='form-input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.add_book_submit_button}>
                                <button
                                    type='submit'
                                    className={style.font}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
    
export default AddBook;