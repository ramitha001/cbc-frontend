import './loginPage.css'

export default function LoginPage(){
    return(
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>
                
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Enter Your Username" 
                        className="login-input"
                    />
                </div>
                
                <div className="input-group">
                    <input 
                        type="password" 
                        placeholder="Enter Your Password" 
                        className="login-input"
                    />
                </div>
                
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}