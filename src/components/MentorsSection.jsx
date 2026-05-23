import { mentors } from '../data/mentors';
export default function MentorsSection({openBooking}){return <section id='mentors' className='max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-3'>{mentors.map(m=><div key={m.id} className='rounded-2xl p-4 border'><h4>{m.name}</h4><p>{m.field} • {m.rating}</p><button onClick={()=>openBooking(m)}>Book Session</button></div>)}</section>}
