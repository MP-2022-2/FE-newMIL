import { CilNavigationContainer, Navigation } from './style';

const NavigationList = [
  { name: '게임 & 인터렉티브', id: 1 },
  { name: '디지털 엔터테인먼트', id: 2 },
  { name: '미디어 데이터', id: 3 },
  { name: '비쥬얼 컴퓨팅', id: 4 },
  { name: '콘텐츠 디자인', id: 5 },
];

export default function CilNavigaiton() {
  return (
    <CilNavigationContainer>
      {NavigationList.map((item, index) => (
        <Navigation isSelect={item.id === index} key={index}>
          {item.name}
        </Navigation>
      ))}
    </CilNavigationContainer>
  );
}
