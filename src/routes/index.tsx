import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import VideoPlayer from "../components/video-player/VideoPlayer";

const AppRouter = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
    </Routes>
);
export default AppRouter;
