import styled from 'styled-components';

const StyledButton = styled.button`
    background: linear-gradient(214.02deg, #ea5f5f 6.04%, #eeaa55 92.95%);
    width: 122px;
    height: 50px;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    padding: 10px;
    border-radius: 25px;
    border: none;
`;

function ButtonHeader({ text }: { text: string }) {
    return (
        <>
            <StyledButton>{text}</StyledButton>
        </>
    );
}

export default ButtonHeader;
