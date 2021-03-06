import '../App.css';

const rightIcon = <svg t="1657409737659" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2786" width="200" height="200"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z" p-id="2787"></path></svg>;

function RightArrow({moveRight}) {
  const moveRightWrapper = (e) => {
    e.preventDefault();
    moveRight();
  }
    return (
      <span className="RightArrow">
        <a href='#!' onClick={(e) => {moveRightWrapper(e)}}>
        {rightIcon}
        </a>
      </span>
    );
  }
  
  export default RightArrow;
  