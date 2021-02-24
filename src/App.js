import './App.css';
import React from 'react';
import ShowPlanet from './showPlanet.js';
import ShowPerson from './showPerson.js';
import ShowSpecies from './showSpecies.js';

// ?search=r2

const planetsURL = `https://swapi.dev/api/planets/`;
const peopleURL = `https://swapi.dev/api/people/`;
const speciesURL = `https://swapi.dev/api/species/`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      planetsToggle: false,
      peopleToggle: false,
      speciesToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (event) => {

    if(event.target.classList[0] === 'planetsButton'){
      this.fetchData(planetsURL);

        if(this.state.planetsToggle)
        this.setState({planetsToggle: false});
        else
        this.setState({planetsToggle: true});

    }else if(event.target.classList[0] === 'peopleButton'){
      this.fetchData(peopleURL);

      if(this.state.peopleToggle)
      this.setState({peopleToggle: false});
      else
      this.setState({peopleToggle: true});
      

    }else if(event.target.classList[0] === 'speciesButton'){
      this.fetchData(speciesURL);
      
      if(this.state.speciesToggle)
        this.setState({speciesToggle: false});
        else
        this.setState({speciesToggle: true});
    }


  }

  fetchData = async (toFetch) => {
    const response = await fetch(toFetch);
    const data = await response.json();
    this.setState({
      data: data.results
    });
    console.log(this.state.data);
  }


  render(){
    
    const renderPlanets = this.state.data.map(ele => 
      <ShowPlanet key={ele.name} pName={ele.name} pClimate={ele.climate} pTerrain={ele.terrain} pPopulation={ele.population} />
    )

    const renderPeople = this.state.data.map(ele => 
      <ShowPerson key={ele.name} pName={ele.name} pBirthYear={ele.birth_year} pHeight={ele.height} pGender={ele.gender} />
    )

    const renderSpecies = this.state.data.map(ele => 
      <ShowSpecies key={ele.name} pName={ele.name} pAverageLifespan={ele.average_lifespan} pClassification={ele.classification} pLanguage=
      {ele.language} />
    )

    return(
      
      <div className="App">
        <h1>Star Wars Search</h1>
        <div className="Buttons">
        <button className="planetsButton" onClick={this.handleClick}>Show Planets</button>
        <button className="peopleButton" onClick={this.handleClick}>Show Persons</button>
        <button className="speciesButton" onClick={this.handleClick}>Show Species</button>
        </div>
        <div className="Content">
        {this.state.planetsToggle ? renderPlanets : null}
        {this.state.peopleToggle ? renderPeople : null}
        {this.state.speciesToggle ? renderSpecies : null}
        </div>
      </div>
    );
  }
}

export default App;
