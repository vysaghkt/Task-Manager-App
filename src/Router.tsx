import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditTask from "./components/EditTask"
import Home from "./components/TaskHome"

const Router: React.FC = props => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/edit/:id" element={<EditTask />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router