import '../App.css';

function Center({imageSrc}) {
    return (
      <div className="center">
        <img className='image' src={imageSrc} />
      </div>
    );
  }
  
  export default Center;