export default function fetchScopedUsers(firebase) {
  const contactsFromDB = firebase.database().ref('contacts');
  contactsFromDB.on('value', snapshot => {
    const contactObjects = Object.values(snapshot.val());

    const { currentUser } = this.props;

    const filteredContacts = contactObjects
      .filter(contact => {
        return (contact.userId === currentUser)
      });

    this.props.loadContacts(filteredContacts);
  });
};
