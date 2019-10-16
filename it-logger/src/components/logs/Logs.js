import React, {useState, useEffect} from 'react'
import Preloader from '../layouts/Preloader';
import LogItem from './LogItem'
const Logs = () => {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () =>  {
    setLoading(true);
    
    const res = await fetch('/logs')
    const logs = await res.json();

    setLogs(logs);
    setLoading(false)
  }

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading) { 
    return <Preloader />
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>


      {!loading && logs.length === 0? (<h4>No Logs...</h4>): logs.map(log => (
        <LogItem log={log} key={log.id}/>
      ))}
    </ul>
  )
}

export default Logs