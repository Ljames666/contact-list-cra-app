import styled from 'styled-components';

interface IAvatarProps {
    image?: boolean;
    url?: string;
    alt?: string;
    text?: string;
}

const StyledAvatar = styled.div`
    width: 20px;
    height: 20px;
    background: linear-gradient(214.02deg, #ea5f5f 6.04%, #eeaa55 92.95%);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    img {
        width: 20px;
        height: 20px;
    }
`;

function Avatar(props: IAvatarProps) {
    return (
        <>
            {props.image ? (
                <StyledAvatar>
                    <img src={props.url} alt={props.alt} />
                </StyledAvatar>
            ) : (
                <StyledAvatar>
                    <p>{props.text}</p>
                </StyledAvatar>
            )}
        </>
    );
}

export default Avatar;
