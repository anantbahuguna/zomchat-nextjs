import LeftSidebar from './LeftSidebar'
import ChatSection from './ChatSection'
const MainBody = () => {
    return (
        <div className="flex-1 flex overflow-y-hidden">
            <LeftSidebar />
            <div className=" flex-1 flex justify-between">
            <ChatSection />
            </div>
        </div>
    );
};

export default MainBody;