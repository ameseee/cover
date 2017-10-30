import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isSigningUp: true,
    };
  }

  createAccount = (newUser) => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

  componentDidMount() {
    // put this in an action
    const createRef = firebase.database().ref('users');
    createRef.on('value', (snapshot) => {
      const newUser = snapshot.val();
      let newState = newUser ? this.createAccount(newUser) : [];
    // put this in an action
    });
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  createAccountClick = (email, password) => {
    //can't this be an action too???
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => {
        const errorCode = error.code;
        //const errorMsg = error.message;
      });
    this.props.signIn(true);
    this.props.setCurrentUser(this.state.username);
    //can't this be an action too???
    this.clearState();
    this.props.history.push('/');
      //since this is a new user there should be no contacts to render.
  };

  signInClick = (email, password) => {
    //can't this be an action too???
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(login => {
        this.props.setCurrentUser(login.uid)
        this.props.signIn(true)
        this.loadManagedUsers();
      })
      .catch(error => {
        this.props.history.push('/auth');
        alert(error)
      });
  };

  loadManagedUsers = () => {
    const contactsFromDB = firebase.database().ref('contacts');
    const snapShotDb = contactsFromDB.on('value', snapshot => {
      const contactObjects = Object.values(snapshot.val());

      const { currentUser } = this.props;

      const filteredContacts = contactObjects
        .filter(contact => {
          return (contact.userId === currentUser)
        });

      this.props.loadContacts(filteredContacts);
    });

    //update store.
    this.clearState();
    this.props.history.push('/');
  }

  clearState() {
    this.setState({
      username: '',
      password: '',
    });
  }

  switchToOtherForm = () => {
    this.setState({ isSigningUp: !this.state.isSigningUp })
  }

  render() {
    return (
      <div className="authentication-section">
        <section className={classnames("create-account-section", this.state.isSigningUp ? '' : 'hidden')}>
          <h3 className="create-account-title">Create Your Account</h3>
          <div>
            <input
              className="create-account-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="create-account-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="create-account-btn"
              onClick={() => this.createAccountClick(this.state.username, this.state.password)}
            >
              Create Account
            </button>
          </div>
        </section>
        <section className={classnames("sign-in-section", this.state.isSigningUp ? 'hidden' : '')}>
          <h3 className="sign-in-title">Sign In</h3>
          <div>
            <input
              className="sign-in-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="sign-in-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="sign-in-btn"
              onClick={() => this.signInClick(this.state.username, this.state.password)}>
              <Link
                to='/'
                className="link-to-main"
              >
                Sign In
              </Link>
            </button>
          </div>
        </section>
        <article className="other-card-section">
          <h3 className="already" >{this.state.isSigningUp ? 'Already have an account?' : 'Don\'t have an accout yet?'}</h3>
          <button
            className="other-card-btn" onClick={this.switchToOtherForm}
          >
            {this.state.isSigningUp ? 'Sign In' : 'Sign Up'}
          </button>
        </article>
      </div>
    );
  }
}

export default Authentication;
