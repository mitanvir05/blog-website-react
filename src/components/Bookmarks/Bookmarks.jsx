import PropTypes from 'prop-types';
import Bookmark from '../BookMark/BookMark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 p-5 m-5">
            <p className="text-3xl">BookMarked Blog : {bookmarks.length}</p>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;