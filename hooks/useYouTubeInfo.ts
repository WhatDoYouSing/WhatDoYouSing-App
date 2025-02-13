import { useState, useMemo, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

interface VideoType {
  id: string | null;
  title: string;
  author: string;
}

const useYouTubeInfo = () => {
  const [url, setUrl] = useState('');
  const [video, setVideo] = useState<VideoType>({ id: null, title: '', author: '' });

  // 영상 정보 초기화 함수
  const initVideo = () => setVideo({ id: null, title: '', author: '' });

  // 유튜브 ID 추출 함수
  const getVideoId = useCallback((url: string) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?.*v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11}).*/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }, []);

  // 유튜브 정보 추출 함수 (디바운스 적용)
  const fetchVideoInfo = useMemo(
    () =>
      debounce((url: string) => {
        const id = getVideoId(url);
        // ID가 없으면 초기화 후 리턴
        if (!id) {
          initVideo();
          return;
        }

        // ID가 있다면 영상 정보 추출
        fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
        )
          .then((res) => res.json())
          .then((data) => setVideo({ id, title: data.title, author: data.author_name }))
          .catch(() => initVideo());
      }, 500),
    []
  );

  console.log(video);

  const handleClear = () => {
    setUrl('');
    initVideo();
    fetchVideoInfo.cancel();
  };

  useEffect(() => {
    if (url) {
      fetchVideoInfo(url);
    }

    return () => {
      fetchVideoInfo.cancel();
    };
  }, [url, fetchVideoInfo]);

  return { url, video, handleUrlChange: setUrl, handleClear };
};

export default useYouTubeInfo;
