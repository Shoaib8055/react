import React, { Component } from 'react'
import ServicesService from '../services/ServicesService'

class ViewServicesByIdComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicesId: this.props.match.params.servicesId,
            services: []
        }
    }

    componentDidMount(){
        ServicesService.getServicesById(this.state.servicesId).then( res => {
            this.setState({services: res.data});
        })
    }

    render (){
        return (
            <div>
                <h1 className = "text-center">Services</h1>
                <table className='table table striped-center'>
                    <thead>
                        <tr>
                            <td>Service ID</td>
                            <td>Service Name</td>
                            <td>Service Category</td>
                            <td>Service Price</td>
                            <td>Merchant ID</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.services.map(
                                services =>
                                <tr>
                                    <td> {services.servicesId}</td>
                                    <td> {services.servicesName}</td>
                                    <td> {services.servicesCategory}</td>
                                    <td> {services.servicesPrice}</td>
                                    <td> {services.merchantId}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewServicesByIdComponent
