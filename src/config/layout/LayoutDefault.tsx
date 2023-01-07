import Header from '../../shared/components/header/Header';

interface IPropsLayout {
    children: JSX.Element;
}

function LayoutDefault({ children }: IPropsLayout) {
    return (
        <>
            <div style={{ height: '10%', paddingTop: 10 }}>
                <Header />
            </div>
            <div style={{ height: '80%', border: '2px solid black' }}>{children}</div>
            <div>footer</div>
        </>
    );
}

export default LayoutDefault;
