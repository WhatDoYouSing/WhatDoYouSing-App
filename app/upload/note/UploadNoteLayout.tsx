import React, { useState } from 'react';
import { View } from 'react-native';
import { router, usePathname } from 'expo-router';
import { useUploadNoteNavigation } from 'navigation/UploadNoteNavigator';
import { useUploadNoteContext } from 'contexts/UploadNoteContext';
import { BaseModal, Header, LNB } from 'components/common';
import { UPLOAD_TAP_ITEMS } from 'constants/upload';

const UploadNoteLayout = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { replaceSearch, replaceLink, replaceField } = useUploadNoteNavigation();
    const { selectedTab, setSelectedTab, initField } = useUploadNoteContext();
    const [backModalOpen, setBackModalOpen] = useState(false);
    const pathname = usePathname();

    const onTabSelect = (tab: string) => {
      initField();
      setSelectedTab(tab);

      if (tab === UPLOAD_TAP_ITEMS[0]) {
        replaceSearch(tab);
      } else if (tab === UPLOAD_TAP_ITEMS[1]) {
        replaceLink(tab);
      } else if (tab === UPLOAD_TAP_ITEMS[2]) {
        replaceField(tab);
      }
    };

    const handleHeaderBack = () => {
      if (
        pathname === '/upload/note/search' ||
        pathname === '/upload/note/select' ||
        pathname === '/upload/note/link' ||
        (pathname === '/upload/note/field' && selectedTab === '직접')
      ) {
        setBackModalOpen(true);
      } else {
        router.back();
      }
    };

    const handleBackConfirm = () => {
      setBackModalOpen(false);
      router.back();
    };

    return (
      <View className="flex-1 bg-borderBg">
        <Header title="노트 업로드" handleBack={handleHeaderBack} />
        <LNB
          tabItems={UPLOAD_TAP_ITEMS}
          selectedTab={selectedTab}
          handleTabSelect={onTabSelect}
        />
        <View className="flex-1">
          <Component {...props} />
        </View>

        {/* 업로드 취소 모달 */}
        <BaseModal
          isOpen={backModalOpen}
          onClose={() => setBackModalOpen(false)}
          onConfirm={handleBackConfirm}
          title="업로드 취소"
          message={`화면을 벗어나면 업로드가 취소됩니다.\n지금까지 작성한 내용을 삭제하시겠습니까?`}
        />
      </View>
    );
  };
};

export default UploadNoteLayout;
