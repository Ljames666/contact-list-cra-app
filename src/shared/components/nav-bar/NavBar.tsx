import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface INavProps {
    params: string[];
}

const StyledNav = styled.div`
    display: flex;

    .h4 {
        margin: 0 25px;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        text-decoration: none;
        color: white;

        :any-link {
            color: white;
        }
    }
`;
function NavBar({ params }: INavProps) {
    return (
        <StyledNav>
            {params.map((item) => (
                <Link className="h4" to={item.toLowerCase()}>
                    {item.toUpperCase()}
                </Link>
            ))}
        </StyledNav>
    );
}

export default NavBar;
