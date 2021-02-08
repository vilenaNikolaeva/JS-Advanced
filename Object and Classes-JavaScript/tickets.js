function solve(tickets,sortCriteria){
   let ticketsArr=[];

   for(let ticket of tickets){
       let[destination,price,status]=ticket.split('|');
       price=Number(price);
       ticketsArr.push(new Tickets(destination,price,status));
   }

   let sortedTickets;
   switch (sortCriteria) {
       case "destination":
            sortedTickets=ticketsArr.sort((a,b)=>a.destination.localeCompare(b.destination));
           break;
        case "price":
            sortedTickets=ticketsArr.sort((a,b)=> a.price-b.price);    
        break;

       case "status":
           sortedTickets=ticketsArr.sort((a,b)=>a.status.localeCompare(b.status));
           break;
   }
   for(let t of sortedTickets){
    console.log(t.toString());   

   }
}
class Tickets{
    constructor(destination,price,status){
        this.destination=destination;
        this.price=price;
        this.status=status;
    }
    toString(){
        console.log('Ticket')
        return `destination: ${this.destination},
            price: ${this.price},
            status: ${this.status}`;
    }
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')