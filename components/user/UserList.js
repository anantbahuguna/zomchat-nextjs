import UserListItem from "./UserListItem";

const UserList = () => {
    return (
        <ul className="px-2 py-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 8, 8].map((v, i) =>
                i === 0 ? (
                    <UserListItem selected={true} key={i} />
                ) : (
                    <UserListItem key={i} />
                )
            )}
        </ul>
    );
};

export default UserList;