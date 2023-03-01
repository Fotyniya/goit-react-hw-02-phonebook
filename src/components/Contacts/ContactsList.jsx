export const ContactsList = ({contacts})=> {
    return (<div>
        {contacts.map(item => 
            <li key={item.id}>
                {item.name} 
            </li>
            )
        }
    </div>)
}
