import {TopBar, MainBody} from '../components/layout'

const Home = () => (
    <div className="flex">
        <div className="flex-1 flex flex-col min-h-screen h-screen">
            <TopBar />
            <MainBody />
        </div>
    </div>
);

export default Home;
