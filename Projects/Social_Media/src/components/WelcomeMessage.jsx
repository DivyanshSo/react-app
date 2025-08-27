const WelcomeMessage = ({onGetPostsClick}) => {
  return ( 
    <>
        <center>
            <h1 className="welcome-message">There are no posts at this time.</h1>
            <button type="button"
            onClick={onGetPostsClick} 
            className="btn btn-danger">Fetch Posts from Server
            </button>
        </center>
  </>
)};

export default WelcomeMessage;
