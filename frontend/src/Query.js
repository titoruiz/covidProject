import axios from "axios";
import React from "react"
import "./query.css"
import Form from "react-bootstrap/Form"


const SelectAttribute = (props) => { 
    if(props.name == "Country"){
        return <div>
            <a>Select attribute to rank by: </a><br/>
            <button className="button">Population</button>
            <button className="button">Pop.Density</button>
            <button className="button">GDP</button><br/>
            <button className="button">Poverty</button>
            <button className="button">Facilities</button>
            <button className="button">Hosp.Beds</button>

        </div>; 
    }
    if(props.name == "County"){
        return <div>
            <a>Select attribute to rank by: </a><br/>
            <button className="button">Rural Pop.</button>
            <button className="button">Poverty</button>
            <button className="button">No-HighSch.</button>
            <button className="button">Minorities</button><br/>
            <button className="button">Multi-House</button>
            <button className="button">Over-crowding</button>
            <button className="button">Elevation</button>
        </div>; 
    } 
};

class Query extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            region: false,
            attribute: false,
            country:  false,
            state: false,
            county: false,
            pop: false,
            popDen: false,
            gdp:  false,
            poverty: false,
            facilities: false,
        };
        this.countryClick = this.countryClick.bind(this);
        this.stateClick = this.stateClick.bind(this);
        this.countyClick = this.countyClick.bind(this);
        this.query = this.query.bind(this);
    }

    handleClick(event) {
        this.setState({
            region: false,
            attribute: false,
            country:  false,
            state: false,
            county: false,
            pop: false,
            popDen: false,
            gdp:  false,
            poverty: false,
            facilities: false,
            [event.target.name] : true,
            


        })
        console.log('Country was clicked.');
        this.setState({
            region: true,
            country:  true,
            state: false,
            county: false,
        })
    }

    countryClick() {
        console.log('Country was clicked.');
        this.setState({
            region: true,
            country:  true,
            state: false,
            county: false,
        })
    }

    stateClick(){
        console.log('State was clicked.');
        this.setState({
            region: true,
            country:  false,
            state: true,
            county: false,
        })
    }

    countyClick(){
        console.log('County was clicked.');
        this.setState({
            region: true,
            country:  false,
            state: false,
            county: true,
        })
    }

    query(){
        
        // checks to see if a region was selected
        if(this.state.region){
            console.log('Region was clicked.');
            console.log(this.state.country);
            console.log(this.state.state);
            console.log(this.state.county);
        }
        else{
            console.log('Region ERROR');
        }

    }



    render(){
        return(
            <div className="query">
                <div className="form">
                    <h3>Query Covid Data</h3>
                    <div className="text">
                        <a>The queries being performed are based on comparing </a>
                        <a>countries, states, or counties in between the 25th-50th percentile </a>
                        <a>range to their counterparts in the 50th-75th percentile range.</a>
                        <a>The percentile rank will be based on the attributes pertaining </a>
                        <a>those regions. The graph will display the total deaths or cases </a>
                        <a>of that region over time.</a>
                    </div>
                    <br/>
                    <br/>
                    <a>Select which region you would like to query in:</a><br/>
                    <button className="button" name="country" onClick={(event) => this.handleClick(event)} >Country</button>
                    <button className="button" onClick={this.countyClick}>County</button>
                    <br/>

                    {this.state.country ? <SelectAttribute name="Country" /> : null}
                    {this.state.county ? <SelectAttribute name="County" /> : null}


                     

                    <button className="submit"  onClick={this.query}>Query</button>
                </div>
            </div>
        )
    }
}

export default Query;