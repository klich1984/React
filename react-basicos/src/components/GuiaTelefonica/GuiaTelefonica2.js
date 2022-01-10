import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Search = ({ persons, filter }) => {
  const [name, setName] = useState(void 0);

  function search(event) {
    event.preventDefault();
    filter(event.target.value.toLowerCase());
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={search}>
        <input onChange={(event) => search(event)} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

const Persons = ({ persons }) => {
  function renderPersons() {
    const elements = [];

    persons.forEach(person => {
      if (person.show) {
        elements.push(<li>{person.name} -- his/her telephone number: {person.phone}</li>);
      }
    });

    return elements;
  }

  return (
    <ul>
      {renderPersons()}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', show: true },
    { name: 'Ada Lovelace', phone: '39-44-5323523', show: true },
    { name: 'Dan Abramov', phone: '12-43-234345', show: true },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', show: true }
  ]);


  const [formInfo, setNewFormInfo] = useState({ name: '', phone: '' });

  function addPerson(event) {
    event.preventDefault();

    let able = true;

    persons.forEach(person => { // checks if the person's name is already added
      if (person.name == formInfo.name)
        able = false;
    });

    if (able)
      setPersons(persons.concat({ name: formInfo.name, phone: formInfo.phone, show: true }));
    else
      alert(`${formInfo.name} is already added to the list!`);
  }

  function filter(nameToFilter) {
    if (nameToFilter === '') { // if the search form is empty, then show everyone
      setPersons((prev) => prev.map(person => ({ ...person, show: true })));
    }
    else {
      const filtered = [];
      persons.forEach(person => {
        if (!person.name.toLowerCase().includes(nameToFilter))
          filtered.push({ ...person, show: false });
        else
          filtered.push({ ...person });
      });
      setPersons(filtered);
    }
  }

  return (
    <div>
      <Search persons={persons} filter={filter} />
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={(event) => setNewFormInfo({ name: event.target.value, phone: formInfo.phone })} />
          <br />
          number: <input onChange={(event) => setNewFormInfo({ name: formInfo.name, phone: event.target.value })} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Persons</h2>
      <Persons persons={persons} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))


/* MIA
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ users, setUsers }) {
  // Valores por defecto
  const initialValues = {
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  }

  const [userState, setUserState] = useState(initialValues)

  const handleAdd = (e) => {
    event.preventDefault()
    const objNewUser = {
      userFirstname: userState.userFirstname,
      userLastname: userState.userLastname,
      userPhone: userState.userPhone
    }

    setUsers([...users, objNewUser])
  }

  const handleChange = e => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <form onSubmit={handleAdd} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userState.userFirstname}
        onChange={ handleChange }
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={userState.userLastname}
        onChange={ handleChange }
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userState.userPhone}
        onChange={ handleChange }
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable( props ) {
  // ordenar datos
  const sortedInjectUser = props.users.sort((a, b) =>
    a.userLastname.localeCompare(b.userLastname))

  const injectUser = sortedInjectUser.map((value, index) => (
    <tr key={index}>
      <td style={style.tableCell}>{value.userFirstname}</td>
      <td style={style.tableCell}>{value.userLastname}</td>
      <td style={style.tableCell}>{value.userPhone}</td>
    </tr>
    ))

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{injectUser}</tbody>
    </table>
  );
}

function Application(props) {
  const usersToAdd = [
    // {
    //   userFirstname: 'carlos',
    //   userLastname: 'Ariza',
    //   userPhone: '123456789'
    // },
    // {
    //   userFirstname: 'Matias',
    //   userLastname: 'Lopez',
    //   userPhone: '34287632'
    // },
    // {
    //   userFirstname: 'Andrea',
    //   userLastname: 'Martinez',
    //   userPhone: '371826442'
    // },
    // {
    //   userFirstname: 'Erica',
    //   userLastname: 'Orrego',
    //   userPhone: '178972634'
    // }
  ]

  const [users, setUsers] = useState(usersToAdd)


  return (
    <section>
      <PhoneBookForm users={users} setUsers={setUsers} />
      <InformationTable users={users}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);

*/