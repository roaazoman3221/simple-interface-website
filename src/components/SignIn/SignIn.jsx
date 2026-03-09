import "./SignIn.css";

function SignIn({ closePopup , openSignUp}) {
  return (
    <div className="overlay" onClick={closePopup}>
      <div
        className="signIn-box"
        onClick={(click) => click.stopPropagation()}
      >
        
        <div className="content">
          <h2>Sign In</h2>
          <p className="desc">Enter your email and password to sign in !</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button className="sign-btn">Sign In</button>
        <p className="sign-up-btn">Don't have an account? <span  
        onClick={(click) => {
    click.stopPropagation()
    openSignUp()
  }}
        >Sign up</span></p>
        </div>

        
      </div>
    </div>
  );
}

export default SignIn;
