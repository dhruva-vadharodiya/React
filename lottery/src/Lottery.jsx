import { useState } from 'react';
import { genTicket, sum } from './helper';
import Ticket from './Ticket';

export default function Lottery({n=3,winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h2>Lottery game</h2>
            <hr />
            <Ticket ticket={ticket}></Ticket><br /><br /><hr />
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning && "congratulations, you won!"}</h3>
        </div>
    );
}
