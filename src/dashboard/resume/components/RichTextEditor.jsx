import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react';
import {
  Editor,
  EditorProvider,
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Separator,
  Toolbar,
} from 'react-simple-wysiwyg';
import { AIChatSession } from '../../../../service/AIModel';
import { toast } from 'sonner';

const PROMPT =
  'position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags';

function RichTextEditor({ onRichTextEditorChange, index, defalutValue }) {
  const [value, setValue] = useState(defalutValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  //   generate from AI
  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    if (!resumeInfo.experience[index].title) {
      toast('Please Add position title');
      return;
    }
    const prompt = PROMPT.replace(
      '{positionTitle}',
      resumeInfo.experience[index].title
    );
    console.log(prompt);
    const result = await AIChatSession.sendMessage(prompt);
    console.log(result.response.text());
    const resp = result.response.text().toString();
    setValue(resp.replace('[', '').replace(']', ''));
    setLoading(false);
    // setAiGeneratedSummaryList(JSON.parse(result.response.text()));
  };

  return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summary</label>
        <Button
          variant='outline'
          size='sm'
          onClick={GenerateSummaryFromAI}
          className='flex gap-2 border-primary text-primary'
        >
          {loading ? (
            <LoaderCircle className='animate-spin' />
          ) : (
            <>
              <Brain className='h-4 w-4' />
              Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
