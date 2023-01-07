import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import ButtonHeader from '../button-header/ButtonHeader';
import NavBar from '../nav-bar/NavBar';

const nav: string[] = ['home', 'about', 'service', 'portfolio'];

const MyHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: #fff;

    .div-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin-left: 5px;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
    }
`;

function Header() {
    return (
        <MyHeader>
            <div className="div-flex">
                <Avatar text="J" />
                <h1>JAMERSON</h1>
            </div>
            <div>
                <NavBar params={nav} />
            </div>

            <div>
                <ButtonHeader text="Contato" />
            </div>
        </MyHeader>
    );
}

export default Header;
