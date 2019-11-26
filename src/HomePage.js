import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { List, Avatar} from 'antd';

import Nav from './Nav'

class HomePage extends Component {

  // J1) --1)------Le state ThemesList reçoit les données global de l'API---------------------
  constructor(props){
    super(props);
    this.state = {
      ThemesList: [],
  // J1) --1)------ Le state ThemesList reçoit les données global de l'API-------------------  
    }
  }

  
  // J1) < 2 -------------------------------------------------------------------------------
  componentDidMount(){

    const APIResultsLoading = async () => {

      // Here we want all the newspaper from the API
      const data = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=3691b27d6150472da84c73503afefe47')

      // We need to have the right format to be able to use the data
      const body = await data.json()

      // console.log('data from the API : ',body.sources)

      this.setState({
        ThemesList:  body.sources
      })

    }

    APIResultsLoading()
    // J1) 2 /> -------------------------------------------------------------------------------
  }
  

  render() {

    // console.log('Dans mon composant -->',this.state.ThemesList)

    return (
  
      <div>
        <Nav/>


       {/* J1) < 3 -----------------Composant List de AntDesign------------------------------ */}
       
       <div className="Banner"/>
       <Link to="#"> <img  style={{ display: 'flex' , justifyContent: 'center', width: 40, height: 40 }} src="./images/france.png"/></Link>
        </div>
       <div className="HomeThemes">
          <List
              itemLayout="horizontal"

              dataSource={this.state.ThemesList}

              renderItem={(theme,i) => (

              <List.Item>
                <List.Item.Meta

                  avatar={<Avatar src={`/images/${theme.category}.png`} />}

                  title={<Link to={`/ThemeArticles/${theme.id}`} key={i}><h3>{theme.name}</h3></Link>}

                  description={theme.description}
                />

              </List.Item>

              )}/>
         
       {/* J1) 3 /> -----------------Composant List de AntDesign----------------------------- */}
       
      </div>
    );
  }
}

export default HomePage