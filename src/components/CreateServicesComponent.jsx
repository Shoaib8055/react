import React, { Component } from 'react'
import ServicesService from '../services/ServicesService';

class CreateServicesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicesId: this.props.match.params.servicesId,
            servicesName: '',
            servicesCategory: '',
            servicesPrice: '',
            merchantId: ''
        }
        this.changeServicesNameHandler = this.changeServicesNameHandler.bind(this);
        this.changeServicesCategoryHandler = this.changeServicesCategoryHandler.bind(this);
       // this.changeServicesPriceHandler = this.changeServicesPriceHandler.bind(this);
        //this.changeMerchantIdHandler = this.changeMerchantIdHandler.bind(this);
       // this.updateServices = this.updateServices.bind(this);
        this.saveOrUpdateServices = this.saveOrUpdateServices.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.servicesId === '_add'){
            return
        }else{
            ServicesService.getServicesById(this.state.servicesId).then( (res) =>{
                let services = res.data;
            this.setState({servicesName: services.servicesName,
                servicesCategory: services.servicesCategory,
                servicesPrice: services.servicesPrice,
                merchantId: services.merchantId
            });
        });
    }        
    }
    saveOrUpdateServices = (e) => {
        e.preventDefault();
        let services = {servicesName: this.state.servicesName, servicesCategory: this.state.servicesCategory, servicesPrice: this.state.servicesPrice, merchantId: this.state.merchantId};
        console.log('services => ' + JSON.stringify(services));

        
        if(this.state.servicesId === '_add'){
            ServicesService.createServices(services).then(res =>{
                this.props.history.push('/services');
            });
        }else{
            ServicesService.updateServices(this.state.servicesId, services).then( res => {
                this.props.history.push('/services');
            });
        }
    }
    
    changeServicesNameHandler= (event) => {
        this.setState({servicesName: event.target.value});
    }

    changeServicesCategoryHandler= (event) => {
        this.setState({servicesCategory: event.target.value});
    }

    changeServicesPriceHandler= (event) => {
        this.setState({servicesPrice: event.target.value});
    }

    changeMerchantIdHandler= (event) => {
        this.setState({merchantId: event.target.value});
    }

    cancel(){
        this.props.history.push('/services');
    }

    getTitle(){
        if(this.state.servicesId === '_add'){
            return <h3 className="text-center">Add Service</h3>
        }else{
            return <h3 className="text-center">Update Service</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Service Name: </label>
                                            <input placeholder="Service Name" name="servicesName" className="form-control" 
                                                value={this.state.servicesName} onChange={this.changeServicesNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Service Category: </label>
                                            <input placeholder="Service Category" name="servicesCategory" className="form-control" 
                                                value={this.state.servicesCategory} onChange={this.changeServicesCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Service Price: </label>
                                            <input placeholder="Service Price" name="servicesPrice" className="form-control" 
                                                value={this.state.servicesPrice} onChange={this.changeServicesPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Merchant Id: </label>
                                            <input placeholder="Merchant Id" name="merchantId" className="form-control" 
                                                value={this.state.merchantId} onChange={this.changeMerchantIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateServices}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateServicesComponent
