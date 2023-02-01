import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchAPI } from '../../utils/fetchAPI';
import { Sidebar, Videos } from '../../components'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);


    return (
        <Stack sx={{
            flexDirection: {
                sx: "column",
                md: "row"
            }
        }}>
            <Box sx={{
                height: {
                    sx: 'auto',
                    md: '92vh',
                },
                borderRight: '0px solid #3d3d3d',
                boxShadow: '#3d3d3d 0px 0px 10px 0px',
                px: {
                    sx: 0,
                    md: 2
                }
            }}>
                <Sidebar
                    selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                />
            </Box>

            <Box
                p={2}
                sx={{
                    overflowY: "auto",
                    height: '90vh',
                    flex: 2,
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        color: 'white '
                    }}
                >
                    {selectedCategory} <span style={{ color: "#2caee2" }}>videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed