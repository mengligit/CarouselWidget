import '../App.css';


const leftIcon = <svg t="1657409695541" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1885" width="200" height="200"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178c-4.4-3.2-4.4-9.7 0-12.9l246-178c5.3-3.8 12.7-0.1 12.7 6.5v46.8z" p-id="1886"></path></svg>

function LeftArrow({moveLeft}) {
  const moveLeftWrapper = (e) => {
    e.preventDefault();
    moveLeft();
  }
  return (
    <span className="LeftArrow">
      <a href='#!' onClick={(e) => {moveLeftWrapper(e)}}>
       {leftIcon}
      </a>
    </span>
  );
}

export default LeftArrow;
