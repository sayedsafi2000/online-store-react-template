import AllProducts from '../AllProducts/AllProducts';
import HomeBanner from '../HomeBanner/HomeBanner';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    
    return (
        <div>
            <TopHeader></TopHeader>
            <div className='w-11/12 mx-auto'>
                <HomeBanner />
                <AllProducts />
            </div>
        </div>
    );
};

export default Home;