export default function fetchScopedUsers(firebase) {
  const contactsFromDB = firebase.database().ref('contacts');

  contactsFromDB.on('value', snapshot => {
    const contactEntries = Object.entries(snapshot.val());

    const { currentUser } = this.props;

    const contacts = contactEntries.map(([id, contact]) => {
      return Object.assign({id}, contact)
    }).filter(contact => {
      return contact.userId === currentUser;
    });

    this.props.loadContacts(contacts);
  });
};
