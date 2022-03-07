
function ProfilePage({ user }) {


    return (
        <>
            <div className="upper-profile">
                <img src={user.profilePic} />
            </div>
        </>
    )
}

export default ProfilePage
