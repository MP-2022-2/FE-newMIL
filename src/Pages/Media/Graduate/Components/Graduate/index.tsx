import { useState } from 'react';
import TitleComponent from '@/Components/Title';
import { YoramInfo } from '@/Utils/Constants/yoram';
import GridSection from '@/Components/Section';
import {
  TitleAndSelectWrapper,
  YearSelectWrapper,
  YearSelect,
  CompleteGradeWrapper,
  PreviewWrapper,
  Preview,
  TotalGradeWrapper,
  TotalGradeContentWrapper,
} from './style';

const GraduateNavi = () => {
  const [selectedYear, setSelectedYear] = useState(YoramInfo[0].yoramPreview);
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSelectedYear(e.target.value);
  };

  return (
    <>
      <TitleAndSelectWrapper>
        <TitleComponent titleContent="졸업요건" />
        <YearSelectWrapper>
          <YearSelect onChange={handleChange}>
            {YoramInfo.map((year) => (
              <option key={year.yoramPreview} value={year.yoramPreview}>
                {year.yoramYear}년
              </option>
            ))}
          </YearSelect>
        </YearSelectWrapper>
      </TitleAndSelectWrapper>
      <CompleteGradeWrapper>
        <TotalGradeWrapper>
          <h4>총 이수학점</h4>
        </TotalGradeWrapper>
        <TotalGradeContentWrapper>
          <h1>64</h1>
          <h2>/ 128학점</h2>
        </TotalGradeContentWrapper>
      </CompleteGradeWrapper>
      <PreviewWrapper>
        <Preview src={selectedYear} />
      </PreviewWrapper>
    </>
  );
};

export default GraduateNavi;
