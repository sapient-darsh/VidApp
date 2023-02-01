import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../../components'
import { fetchAPI } from '../../utils/fetchAPI'
const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  // console.log(channelDetail, videos);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: "rgb(94,205,225)",
          background: "radial-gradient(circle, rgba(94,205,225,1) 0%, rgba(44,174,226,1) 100%)",
          zIndex:'10',
          height:'300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail