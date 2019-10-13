import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Modal} from 'antd';
import Nav from './Nav';
import {connect} from 'react-redux';

const { Meta } = Card;

class ThemesArticles extends Component {

  constructor(props){
    super(props);
    this.state = {
      ThemeArticles: [],
      visible:false,
      title: 'No title',
      content: 'No content',
      articleLiked : [],
    }
  }

  showModal = (title,content) => {

    this.setState({
      visible: true,
      title: title,
      content: content
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentDidMount(){

  const findArticles = async () => {

      // Fetching the data 
      const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.id}&apiKey=3691b27d6150472da84c73503afefe47`);

      // Json format
      const body =  await data.json();

      // console.log('test body dans theme articles ->', body.articles)

      // Uploading the state
      this.setState({
        ThemeArticles:  body.articles
      })

  }

  findArticles()
  }

  render() {

    // console.log(' props de mon de ma page Theme Articles --> ',this.props.match.params.id)
    
    return (
      
      <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
    
            {this.state.ThemeArticles.map((article,i) => (

                <div key={i} style={{display:'flex',justifyContent:'center'}}>
                  <Card
                    style={{ 
                    width: 300, 
                    margin:'15px', 
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent:'space-between' }}
                    cover={
                    <img
                        alt="example"
                        src={article.urlToImage}
                    />
                    }
                    actions={[
                        <Icon type="read" key="ellipsis2" onClick={() => this.showModal(article.title,article.content)}/>,
                        <Icon type="like" key="ellipsis" onClick={() => {this.props.saveArticle(article)}} />
                    ]}
                    >

                    <Meta
                      title={article.title}
                      description={article.description}
                    />
              
                  </Card>

                  <Modal
                  title={this.state.title}
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  
                  >

                    <p>{this.state.content}</p>

                </Modal>

                </div>
               

            ))}

           </div> 

         
      
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveArticle: function(article) { 

      // console.log('je suis dans mon mapstoprpos et --> article',article)

        dispatch( {type: 'SAVE',
              articleLiked: article
                                }) 
    }
  }
}



export default connect(
  null, 
  mapDispatchToProps
)(ThemesArticles);