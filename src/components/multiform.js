import React, { Component } from "react";
import axios from 'axios';
import "../App.css";

class MultiForm extends Component {

    state = {
        name: '',
        price: '',
        selectedFile: null,
        filename: ''
    }

    handleChange = (event) => {
        this.setState({
            name: document.getElementById('name').value,
            price: document.getElementById('price').value
        })
    }

    fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        this.setState({
            selectedFile: event.target.files[0],
            filename: document.getElementById('file').value
        })
        console.log(file);
    }

    fileUploadHandler = (event) => {

        event.preventDefault();

        let formData = new FormData();

        formData.append('name', this.state.name);
        formData.append('price', this.state.price);
        formData.append('filename', this.state.filename);
        formData.append('file', this.state.selectedFile);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://localhost:3000", formData, config)
        .then (res => {
            console.log(res.data);
            console.log(this.state.filename);
            console.log(formData);
        })
    }

    render () {
        return (
            <div className="formDiv">
                <h2>Multipart Form</h2>
                <form encType="multipart/form">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name of the product" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder="Price" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        placeholder="Upload your file" 
                        onChange={this.fileSelectedHandler}
                    />
                    <br/>
                    <button className="submitBtn" type="submit" onClick={this.fileUploadHandler}>Add Products</button>
                </form>
            </div>
        )
    }
}
export default MultiForm;