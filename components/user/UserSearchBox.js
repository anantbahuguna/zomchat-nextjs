const UserSearchBox = () => {
    return (
        <form className="relative px-2 py-3">
            <input
                type="text"
                placeholder="Search"
                className="rounded bg-gray-900 text-gray-200 text-s px-2 py-1 w-full"
            />
            <span
                className="absolute right-0 top-0 mr-4"
                style={{ top: "18px" }}
            >
                {" "}
                <svg
                    className="w-4 h-4 text-gray-500 hover:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    ></path>
                </svg>
            </span>
        </form>
    );
};

export default UserSearchBox;