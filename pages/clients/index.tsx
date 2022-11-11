import Link from "next/link";
import styles from "../../styles/Home.module.css";

function ClientsPage() {
  const clients = [
    // fetched data from db
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div className={styles.container}>
      <h1>The Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[id]',
              query: { id: client.id }
            }}>{client.name}</Link>
          </li>
        ))}
        {/* { clients.map(client => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}
        {/* <li><Link href="/clients/max">Maximilian</Link></li>
        <li><Link href="/clients/manu">Manuel</Link></li> */}
      </ul>
    </div>
  );
}

export default ClientsPage;
