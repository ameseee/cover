export function fetchScopedUsers(firebase) {
  const contactsFromDB = firebase.database().ref('contacts');

  contactsFromDB.on('value', snapshot => {
    const contactEntries = Object.entries(snapshot.val());

    const { currentUser } = this.props;

    const contacts = contactEntries.map(([id, contact]) => {
      return Object.assign({id}, contact);
    }).filter(contact => {
      return contact.userId === currentUser;
    });

    this.props.loadContacts(contacts);
  });
}

export const removeContact = ({id}, firebase) => {
  firebase.database().ref(`contacts/${id}`).remove();
};

export const signOutFirebase = firebase => {
  firebase.auth().signOut().then( () => {
  }).catch( error => {
    alert('We experienced an error:', error);
  });
};

export const createAccount = (email, password, firebase, props) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(login => {
      props.setCurrentUser(login.uid);
      props.signIn(true);
      props.history.push('/main');
    })
    .catch( error => {
      throw new Error(error);
    });
};

export const signIn = (email, password, firebase, props) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(login => {
      props.setCurrentUser(login.uid);
      props.signIn(true);
      props.history.push('/main');
    })
    .catch(error => {
      this.props.history.push('/auth');
      alert(error);
    });
};
