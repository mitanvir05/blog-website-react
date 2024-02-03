import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 m-2 border-b-2'> 
            <h1 className="text-4xl font-bold">Avoid Trends</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;