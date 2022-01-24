import React, { Component } from 'react'
import ServicesService from '../services/ServicesService'

class ViewServicesByCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicesCategory: this.props.match.params.servicesCategory,
            services: []
        }

    this.addServices = this.addServices.bind(this);
        this.editServices = this.editServices.bind(this);
        this.deleteServices = this.deleteServices.bind(this);
    }

    deleteServices(servicesId){
        ServicesService.deleteServices(servicesId).then( res => {
            this.setState({services: this.state.services.filter(services => services.servicesId !== servicesId)});
        });
    }
    viewServices(servicesId){
        this.props.history.push(`/view-services/${servicesId}`);
    }
    editServices(servicesId){
        this.props.history.push(`/add-services/${servicesId}`);
    }

    componentDidMount(){
        ServicesService.getServicesByCategory(this.state.servicesCategory).then( res => {
            this.setState({services: res.data});
        });
    }

    addServices(){
        this.props.history.push('/add-services/_add');
    }
    /*componentDidMount(){
        ServicesService.getServicesByCategory(this.state.servicesCategory).then( res => {
            this.setState({services: res.data});
        })
    }*/

    render (){
        return (
            <div>
                 <h2 className="text-center">Services List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addServices}> Add Service</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Service ID </th>
                                <th> Service Name </th>
                                <th> Service Category </th>
                                <th> Service Price </th>
                                <th> Merchant ID </th>
                                <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                     this.state.services.map(
                                        services =>
                                        <tr>
                                            <td> {services.servicesId} </td>
                                            <td> {services.servicesName} </td>
                                            <td> {services.servicesCategory} </td>
                                            <td> {services.servicesPrice} </td>
                                            <td> {services.merchantId} </td>
                                            <td>
                                                         <button onClick={ () => this.editServices(services.servicesId)} className="btn btn-info">Update </button>
                                                         <button style={{marginLeft: "10px"}} onClick={ () => this.deleteServices(services.servicesId)} className="btn btn-danger">Delete </button>
                                                         <button style={{marginLeft: "10px"}} onClick={ () => this.viewServices(services.servicesId)} className="btn btn-info">View </button>
                                                     </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
                  /*  <thead>
                        <tr>
                            <td>Service ID</td>
                            <td>Service Name</td>
                            <td>Service Category</td>
                            <td>Service Price</td>
                            <td>Merchant ID</td>
                            <td>Actions</td>
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
                                    <td>
                                                 <button onClick={ () => this.editServices(services.servicesId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteServices(services.servicesId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewServices(services.servicesId)} className="btn btn-info">View </button>
                                             </td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                
        )
    }
}*/

export default ViewServicesByCategoryComponent