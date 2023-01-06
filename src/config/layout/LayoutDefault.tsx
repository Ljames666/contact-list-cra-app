interface IPropsLayout {
    children: JSX.Element;
}

function LayoutDefault({ children }: IPropsLayout) {
    return (
        <>
            <div style={{ height: '10%' }}>header</div>
            <div style={{ height: '80%', border: '2px solid black' }}>{children}</div>
            <div>footer</div>
        </>
    );
}

export default LayoutDefault;
