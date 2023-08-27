import "./Ticket.css";
export default function Ticket({ ticket }) {
    if (!ticket) {
        return <div>no ticket ⧲</div>;
    }

    const { name, destination, gender, seat } = ticket;
    return (
        <div className="ticketContainer">
            <h1 className="title">Ticket details </h1>
            <div className="filedsContainer">
                <p className="field">name:{name}</p>
                <p className="field">name:{destination}</p>
                <p className="field">name:[🧟]</p>
           </div>
       </div> 
    );
    }  