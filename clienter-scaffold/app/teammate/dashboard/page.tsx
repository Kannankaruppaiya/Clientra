export default function Page(){return(
  <div style={{maxWidth:900,margin:'0 auto',padding:'32px 20px'}}>
    <h1 style={{fontSize:24}}>Teammate workspace</h1>
    <p style={{color:'#8591a2'}}>Your assigned clients, projects, tasks and meetings. Scoped to your role.</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:12,marginTop:20}}>
      {[['4','My tasks'],['2','My projects'],['1','Meetings today'],['3','Messages']].map(([n,l])=>(
        <div key={l} style={{background:'#fff',border:'1px solid #edf0f3',borderRadius:12,padding:16}}>
          <b style={{fontSize:22}}>{n}</b><div style={{color:'#8591a2',fontSize:13}}>{l}</div></div>))}
    </div>
  </div>);}
