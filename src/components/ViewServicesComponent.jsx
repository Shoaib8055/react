import React, { Component } from 'react'
import ServicesService from '../services/ServicesService'

class ViewServicesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicesId: this.props.match.params.servicesId,
            services: {}
        }
    }

    componentDidMount(){
        ServicesService.getServicesById(this.state.servicesId).then( res => {
            this.setState({services: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Service Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b> Service Name: </b></label>
                            <div> { this.state.services.servicesName }</div>
                        </div>
                        <div className = "row">
                            <label><b> Service Category: </b></label>
                            <div> { this.state.services.servicesCategory }</div>
                        </div>
                        <div className = "row">
                            <label><b> Service Price: </b></label>
                            <div> { this.state.services.servicesPrice }</div>
                        </div>
                        <div className = "row">
                            <label><b> Merchant ID: </b></label>
                            <div> { this.state.services.merchantId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewServicesComponent