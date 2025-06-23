import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {

    const navigate = useNavigate();
    const goToLogin = () => {
        //로그인 페이지로 이동
        navigate('/login')
    }

    const handleLogout = () => {
        setAuthenticate(false); //로그아웃 시 authenticate 상태를 false로 변경
        alert('로그아웃 되었습니다.');
        navigate('/')
    }

    const search = (event) => {
        //console.log('검색어:', e.target.value);
        // 엔터키를 눌렀을 때 검색어를 처리
        console.log('키 입력:', event.key);

        if (event.key === 'Enter') {
            // 검색어를 이용한 검색 로직을 여기에 추가
            //console.log('검색 실행:', e.target.value);
            // 예: navigate(`/search?query=${e.target.value}`)와 같이 검색 페이지로 이동할 수 있음
        
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)


        }
    }

    //Array타입으로 만들어 for문으로 돌려서 메뉴를 만들어줌
    const menulist = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성"
    ]

  return (
    <div>
        <div>
            <div className='login-button-wrapper'>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    {authenticate ? (
                            <div onClick={handleLogout}>로그아웃</div>
                        ) : (
                            <div onClick={goToLogin}>로그인</div>
                        )}
                </div>
                
            </div>
        </div>
        <div className='nav-section'> 
            <img width = {100}
                 src='https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg' style={{cursor:'pointer'}} onClick={()=>navigate('/')}/>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menulist.map((menu, idx)=> (<li key={idx}>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder='검색' className='search-input' onKeyPress={search}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar