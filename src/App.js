import React, { Component } from "react";
import MultiForm from "./components/multiform";
import ViewPDF from "./components/viewpdf";

class App extends Component {
    render () {
        return (
            <div>
                <MultiForm />
                <ViewPDF />
            </div>    
        )
    }
}
export default App;