import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface props {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<props> = ({ auth, setAuth }) => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
        if (auth) {
            setAuth(!auth);
        }
    };
    const search = (e: any) => {
        if (e.key === 'Enter') {
            let value = e.target.value;
            navigate(`/?q=${value}`);
        }
    };
    return (
        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{auth ? '로그아웃' : '로그인'}</div>
                </div>
            </div>
            <div className='nav-section'>
                <img
                    width={100}
                    src='https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg'
                />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type='text'
                        onKeyDown={(event) => {
                            search(event);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
