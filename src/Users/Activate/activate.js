import React,{Component} from "react";
import axios from "axios";
import "./activate.scss"

class  Activate extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            userPassword:"",
            confirmPassword:"",
            dob:"",
            userName:"",
            confirmationNumber:this.props.match.params.confirmationNumber,
            validConfirmationNumber:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        console.log()
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    componentDidMount()
    {
        console.log();
        if(this.props.match.params.confirmationNumber)
        {
            console.log("I came inside")
        axios
        .post(process.env.REACT_APP_API_URL+"/user/activationDetails", {
          activationCode: this.props.match.params.confirmationNumber
        })
        .then(res => {
            console.log(res);
         if(res.data.success)
         {
            this.setState({
                        userName:res.data.userName,
                        validConfirmationNumber:true
                    });
         }

        });
    }
    }
    handleClick(event)
    {
        event.preventDefault();
        console.log(this.state);
        axios
        .post(process.env.REACT_APP_API_URL+"/user/activateAccount", {
          confirmationNumber: this.state.confirmationNumber,
          password:this.state.userPassword,
          confirmPassword:this.state.confirmPassword,
          dob:this.state.dob

        })
        .then(res => {
            console.log(res);
         if(res.data.success)
         {
            this.setState({
                        userName:res.data.userName,
                        validConfirmationNumber:true
                    });
         }

        });
    }
    render()
    {
        return(
            <div id="activateHolder">
            {(this.props.match.params.confirmationNumber && this.state.validConfirmationNumber)? (
                <div>
                        welcome {this.state.userName}
                </div>):
                (this.props.match.params.confirmationNumber && !this.state.validConfirmationNumber)?(
                    <div>
                            Please check your confirmation Number
                    </div>
                )
                :(<div>
                    <label>Enter your confirmation Number</label>
                    <input type="input" id="confirmationNumber" name="confirmationNumber" onChange={this.handleChange}/>
                    <p className="errorMessage">Please enter confirmation number</p>
                </div>)
            }

                <div>
                    <label>Enter your password</label>
                    <input type="password" id="userPassword" name="userPassword" onChange={this.handleChange}/>
                    <p className="errorMessage">Please enter valid password</p>
                </div>
                <div>
                    <label>Confirm your password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"  onChange={this.handleChange}/>
                    <p className="errorMessage">Password doesnt match</p>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" id="dob" name="dob" placeholder="mm/dd/yyyy"/>
                    <p className="errorMessage">Please enter valid date of birth</p>
                </div>
                <button type="button" onClick={this.handleClick} disabled={(this.props.match.params.confirmationNumber && !this.state.validConfirmationNumber)}>Activate</button>
            </div>
        )
    }
}
export default Activate;