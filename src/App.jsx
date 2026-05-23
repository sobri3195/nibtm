import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeatureCards from './components/FeatureCards';
import LearningPaths from './components/LearningPaths';
import TopicsExplorer from './components/TopicsExplorer';
import DatasetsSection from './components/DatasetsSection';
import MentorsSection from './components/MentorsSection';
import Workspace from './components/Workspace';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Toast from './components/Toast';
import { getLocalState, saveLocalState, resetLocalState, exportLocalState, importLocalState } from './utils/localStorage';
import { translations } from './utils/translations';

export default function App(){
  const [state,setState]=useState(getLocalState()); const [step,setStep]=useState(0); const [toast,setToast]=useState('');
  const [modal,setModal]=useState({open:false,title:'',content:null});
  useEffect(()=>{saveLocalState(state);document.documentElement.classList.toggle('dark',state.theme==='dark')},[state]);
  const t=translations[state.preferredLanguage]||translations.en;
  const onNav=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return <div className='min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100'>
    <Navbar lang={state.preferredLanguage} setLang={(v)=>setState(s=>({...s,preferredLanguage:v}))} theme={state.theme} toggleTheme={()=>setState(s=>({...s,theme:s.theme==='dark'?'light':'dark'}))} t={t} onNav={onNav}/>
    <Hero t={t} onNav={onNav}/>
    <AboutSection step={step} setStep={setStep}/><FeatureCards/>
    <LearningPaths state={state} setState={setState} setToast={setToast} openModules={(p)=>setModal({open:true,title:p.name,content:<ul>{Array.from({length:5}).map((_,i)=><li key={i}>Module {i+1}</li>)}</ul>})}/>
    <TopicsExplorer state={state} setState={setState}/><DatasetsSection state={state} setState={setState} openDataset={(d)=>setModal({open:true,title:d.name,content:<p>Mock schema preview and sample rows.</p>})}/><MentorsSection openBooking={(m)=>setModal({open:true,title:`Book ${m.name}`,content:<button onClick={()=>{setState(s=>({...s,mentorBookings:[...s.mentorBookings,{id:Date.now(),mentor:m.name}]}));setToast('Booking confirmed')}}>Confirm Booking</button>})}/>
    <Workspace state={state} setState={setState} resetLocal={()=>setState(resetLocalState())} exportData={()=>{const blob=new Blob([exportLocalState()],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nibtm-local.json';a.click();}} importData={()=>{const raw=prompt('Paste JSON');if(raw){setState(importLocalState(raw));}}}/>
    <Footer/><Modal open={modal.open} onClose={()=>setModal({open:false})} title={modal.title}>{modal.content}</Modal><Toast message={toast}/>
  </div>
}
