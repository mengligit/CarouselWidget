import '../App.css';

function Dot({index, jump, select}) {
 return (
    <div className='Dot' onClick={() => jump(index)} style={{
        backgroundColor : select ? 'purple': '#bbb'
    }}>
    </div>
 );
}

export default Dot;
