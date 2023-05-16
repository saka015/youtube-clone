import { BrowserRouter , Routes ,Route } from "react-router-dom";
import {Box} from '@mui/material'

import {Navbar ,Feed , VideoDetail , ChannelDetail , SearchFeed} from './Component'


const App = () => (

    <BrowserRouter>
       
       <Box sx={{backgroundColor:'#000'}}></Box>
       <Navbar />

       <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id"  element={<VideoDetail />} />
        <Route path="/channel/:id"  element={<ChannelDetail />} />
        <Route path="/search/:searchTerm"  element={<SearchFeed />} />

       </Routes>

    </BrowserRouter>
);

export default App