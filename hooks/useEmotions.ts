import { useState } from 'react';
import { EMOTION_MAP } from 'constants/emotions';

// 임시 명세서 (이번꺼는 아직 작성이 안되어 있어서 우선 왓두유씽 ver.1을 참고했습니다. 추후 업데이트 되면 변경하겠습니다)
const rawEmotionData = {
  message: '투표감정 조회 성공',
  data: {
    post_id: 55,
    Emotion: [
      { content: 1, num: 6 }, // 행복 6
      { content: 10, num: 1 }, // 용기 1
    ],
  },
};

const useEmotions = () => {
  const [selectedEmotions, setSelectedEmotions] = useState<number[]>([]);

  const emotionCounts: { [key: number]: number } = {};
  rawEmotionData.data.Emotion.forEach((item) => {
    emotionCounts[item.content] = item.num; // ex) { 1: 6, 10: 1 }
  });

  const emotions = Object.entries(EMOTION_MAP).map(([id, label]) => ({
    id: Number(id),
    label,
    count: emotionCounts[Number(id)],
  }));

  // 감정 선택/해제 핸들러
  const handleSelectEmotion = (id: number) => {
    setSelectedEmotions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 감정 추가 모달 핸들러
  const handleAddEmotion = () => {
    console.log('감정 추가 모달 열기');
  };

  return {
    emotions,
    selectedEmotions,
    handleSelectEmotion,
    handleAddEmotion,
  };
};

export default useEmotions;
