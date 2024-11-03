import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../service/GlobalApi';
import AddResume from './components/AddResume';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setResumeList(resp.data.data);
      }
    );
  };
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text 3xl'>My Resume</h2>
      <p>Start creating CV for your next job role</p>
      <div
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
      mt-10 gap-5'
      >
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume, index) => (
            <ResumeCardItem
              resume={resume}
              key={index}
              refreshData={GetResumesList}
            />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
