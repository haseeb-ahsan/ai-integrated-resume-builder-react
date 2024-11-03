import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react';
import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Education from './forms/Education';
import Experience from './forms/Experience';
import PersonalDetail from './forms/PersonalDetail';
import Skills from './forms/Skills';
import Summary from './forms/Summary';
import ThemeColor from './ThemeColor';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={'/dashboard'}>
            <Button>
              <Home />
            </Button>
          </Link>
          <ThemeColor />
        </div>

        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button
              className=''
              size='sm'
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {' '}
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className='flex gap-2'
            size='sm'
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details */}

      {activeFormIndex == 1 ? (
        <PersonalDetail enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        // Summary
        <Summary enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        //   Experience
        <Experience enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 4 ? (
        //   Education
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Navigate to={'/my-resume/' + resumeId + '/view'} />
      ) : null}
    </div>
  );
}

export default FormSection;