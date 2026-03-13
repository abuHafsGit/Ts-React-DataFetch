


type User = {
    user: {
        id: number;
        name: string;
        email: string;
    }
}
function User(props: User) {
    console.log(props.user.email)
    return (
        <div>
            user
        </div>
    )
}

export default User
