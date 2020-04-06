import React from 'react';

import axios from 'axios';

import CardDetails from '../../CardDetails/CardDetails';
import DetailsPage from '../../DetailsPage/DetailsPage';
import ListItem from '../../ListItem/ListItem';
import Header from '../../Header/Header';
import Search from '../../Search/Search';

import './HomePage.scss';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cocktails: [],
            selectedCocktail: {},
            isListVisible: true,
            isDetailsVisible: false
        };
    }

    componentDidMount(){
        const alcoholicRequest = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        const nonAlcoholicRequest = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        const ordinaryCocktailsRequest = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
        const glassCocktailsRequest = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
        const champagneFlutesRequest = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute');

        axios
            .all([alcoholicRequest, nonAlcoholicRequest, ordinaryCocktailsRequest,
                    glassCocktailsRequest, champagneFlutesRequest])
            .then(
                axios.spread((...response) =>{
                    this.setState({ cocktails: this.state.cocktails.concat({ name: 'Alcoholic', list: response[0].data.drinks.slice(0,4) }) })
                    this.setState({ cocktails: this.state.cocktails.concat({ name: 'Non Alcoholic', list: response[1].data.drinks.slice(0,4) }) })
                    this.setState({ cocktails: this.state.cocktails.concat({ name: 'Ordinary drink', list: response[2].data.drinks.slice(0,4) }) })
                    this.setState({ cocktails: this.state.cocktails.concat({ name: 'Cocktail Glass', list: response[3].data.drinks.slice(0,4) }) })
                    this.setState({ cocktails: this.state.cocktails.concat({ name: 'Champagne Flute', list: response[4].data.drinks.slice(0,4) }) })
            }));
    }

    onImageClickCallbackFunction = (selectedCocktail) => {
        let selectedCocktails = this.state.cocktails.find(c => c.name === selectedCocktail.type).list;
        this.setState({selectedCocktail: selectedCocktails[selectedCocktail.index]})
        this.setState({isListVisible: false})
    }

    onTitleClickCallbackFunction = (selectedCocktail) =>{
        let selectedCocktails = this.state.cocktails.find(c => c.name === selectedCocktail.type).list;
        this.setState({selectedCocktail: selectedCocktails[selectedCocktail.index]})
        this.setState({isDetailsVisible: true})
    }

    onHideDetailsCallbackFunction = () =>{
        this.setState({isDetailsVisible: false});
    }

    onBackDetailsPage = () =>{
        this.setState({isListVisible: true})
    }

  render(){
                  
    let cocktailsList = this.state.cocktails.map(c => 
        <div key={c.name}>
            <ListItem items={c.list} title={c.name} key={c.name}
                  onImageClick={this.onImageClickCallbackFunction}
                  onTitleClick={this.onTitleClickCallbackFunction} />
                  {this.state.isDetailsVisible ?   
                        <CardDetails onHideDetailsClick={this.onHideDetailsCallbackFunction}
                                 selectedCocktail={this.state.selectedCocktail}
                                 key={this.state.selectedCocktail.strDrink}
                                /> 
                    :null
                   }
        </div>
    );

    return (
        <div className="main-container">
           <Header/>
           <div className="content">
                <div className="search-bar">
                    <Search/>
                </div>
           <div className="main-content">
               
                {this.state.isListVisible ? 
                    <div className="cocktails-list">
                        {cocktailsList}
                    </div>:null
                }

                {/* this will be refactored with the router */}

                {!this.state.isListVisible ? 
                    <DetailsPage selectedCocktail={this.state.selectedCocktail}
                                onBackDetailsPage={this.onBackDetailsPage}
                                key={this.state.selectedCocktail.idDrink}/>
                    : null
                }
            </div>
          </div>  
        </div>
      );
  }
}

export default HomePage;

