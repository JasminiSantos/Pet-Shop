import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { PageVideosContainer,
         PageVideosColumns,
         PageVideosLayout,
         PageContainer,
         MainVideoContainer,
         MainVideoLayout,
         MainVideosLink

} from './pageVideosElements';


const PageVideos= () => {

const [selectedVideo, setSelectedVideo] = useState("https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4");

        return (
            <>
                <PageContainer>
                <Navbar/>
                <MainVideoContainer>
                <MainVideoLayout autoPlay loop src={selectedVideo}/>
                </MainVideoContainer>
                <PageVideosContainer>

                    <PageVideosColumns>
                    <MainVideosLink> 
                    <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4"}/>
                    </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink>
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-parrots-on-a-branch-in-a-nature-reserve-4649-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-parrots-on-a-branch-in-a-nature-reserve-4649-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink  >
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-white-cat-lying-among-the-grasses-seen-up-close-22732-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-white-cat-lying-among-the-grasses-seen-up-close-22732-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink>
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-with-her-dog-in-the-sunset-4800-large.mp4")}  src={"https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-with-her-dog-in-the-sunset-4800-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                    <MainVideosLink  >
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-fish-and-moss-in-a-fish-tank-4021-large.mp4")}  src={"https://assets.mixkit.co/videos/preview/mixkit-fish-and-moss-in-a-fish-tank-4021-large.mp4"}/>
                    </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink>
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-white-tiger-resting-in-the-woods-6803-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-white-tiger-resting-in-the-woods-6803-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink>
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-green-vailed-chameleon-seen-from-one-side-1489-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-green-vailed-chameleon-seen-from-one-side-1489-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                    <PageVideosColumns>
                        <MainVideosLink>
                        <PageVideosLayout onClick={() => setSelectedVideo("https://assets.mixkit.co/videos/preview/mixkit-a-couple-of-cats-in-the-snow-9949-large.mp4")} src={"https://assets.mixkit.co/videos/preview/mixkit-a-couple-of-cats-in-the-snow-9949-large.mp4"}/>
                        </MainVideosLink>
                    </PageVideosColumns>

                </PageVideosContainer>
                </PageContainer>
            </>
        )
};

export default PageVideos
