import { useEffect, useState } from 'react';
import Input from '@/Components/Form/_Input';
import { useRecoilValue } from 'recoil';
import { userState } from '@/Utils/Store/Recoil/user';
import Button from '@/Components/Button';
import { useForm } from 'react-hook-form';
import instance from '@/Utils/Store/Api/axios';
import { ProfileEditorContainer, Dim, EditorModal } from './style';

export default function ProfileEditor({ onClick }: { onClick: () => void }) {
  const [onDisabled, setDisabled] = useState(false);
  const { register, getValues } = useForm({ mode: 'onChange' });
  const userData = useRecoilValue(userState);

  const postEditProfile = async () => {
    try {
      await instance({
        url: 'user/mine/newinfo',
        method: 'put',
        data: { track: 'NONE', company: getValues('company') },
      });
      await instance({
        url: 'user/mine/nick-name',
        method: 'put',
        data: { nickName: getValues('nickname') },
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    document.body.style.minHeight = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    setTimeout(() => setDisabled(true), 100);

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.style.touchAction = 'auto';
      document.body.style.minHeight = '0%';
    };
  }, []);

  return (
    <ProfileEditorContainer>
      <EditorModal>
        <h2>프로필 수정</h2>

        <Input
          label="이름"
          id="name"
          type="text"
          context={register('name', {
            disabled: onDisabled,
            value: userData.name,
          })}
        />
        <Input
          label="학번"
          id="studentId"
          type="text"
          context={register('studentId', {
            disabled: onDisabled,
            value: userData.studentId,
          })}
        />
        <Input
          label="이메일"
          id="email"
          type="text"
          context={register('email', {
            disabled: onDisabled,
            value: userData.email,
          })}
        />
        <Input
          label="닉네임"
          id="nickname"
          type="text"
          context={register('nickname', {
            value: userData.nickName,
          })}
        />
        {userData.identity === 'ROLE_GRADUATE' && (
          <Input
            label="회사"
            id="company"
            type="text"
            context={register('company', {
              value: userData.company,
            })}
          />
        )}
        <Button onClick={postEditProfile}>확인</Button>
        <Button third onClick={onClick}>
          취소
        </Button>
      </EditorModal>
      <Dim onClick={onClick} />
    </ProfileEditorContainer>
  );
}
