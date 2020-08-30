import UserImage from "./UserImage";

const UserListItem = ({ selected }) => {
    return (
        <li className={`text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900 ${selected && 'bg-gray-750 rounded'}`}>
            <a href="# " className="flex items-center">
                <div>
                    <UserImage />
                </div>
                <div className="text-sm ml-3">
                    <p className="text-gray-200 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                </div>
            </a>
        </li>
    );
};

export default UserListItem;