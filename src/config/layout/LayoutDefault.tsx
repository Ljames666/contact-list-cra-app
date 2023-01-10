import Header from '../../shared/components/header/Header';
import Footer from '../../shared/components/footer/Footer';

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
            <div
                style={{
                    height: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}
            >
                <Footer texto="Created by Razor | All Reserved!" />
            </div>
        </>
    );
}

export default LayoutDefault;
