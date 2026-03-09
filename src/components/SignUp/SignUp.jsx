import './SignUp.css';

function SignUp({ closePopup, openSignIn }) {
    return (
    <div className="overlay" onClick={closePopup}>
        <div
        className="signUp-box"
        onClick={(click) => click.stopPropagation()}
        >
        
        <div className="content">
            <h2>Sign Up</h2>
            <p className="desc">Enter your email and username , password to sign up!</p>

        <input type="text" placeholder='Enter your username' />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button className="sign-btn">Sign Up</button>
        <p className="sign-in-btn">Have an account? <span  
        onClick={(click) => {
    click.stopPropagation()
    openSignIn()
    }}
        >Log in</span></p>
        </div>

        
    </div>
    </div>
  );
}

export default SignUp;
