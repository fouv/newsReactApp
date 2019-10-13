export default function(articlesLiked = [], action) {
    
    var articlesLikedCopie = [...articlesLiked]

    if(action.type === 'SAVE') {

        // console.log('Larticle description que je viens de liker -->',action.articleLiked.description)

        // We are checking if we hade already saved the article before
        if(articlesLikedCopie.length > 0){

            for(var i = 0; i < articlesLikedCopie.length; i++){
                // console.log('tous nos descriptions du store -- numero ' + i + ' ', articlesLikedCopie[i].description)

                if(articlesLikedCopie[i].title === action.articleLiked.title){

                    console.log('Article already in the store')
                    
                    return articlesLikedCopie

                }
            }
        }

        articlesLikedCopie.push(action.articleLiked)

        return articlesLikedCopie;
       

    }else if(action.type === 'DELETE') {
       
        articlesLikedCopie.splice(action.position,1)

        return articlesLikedCopie;

    }else {

        return articlesLikedCopie;

    }
  }