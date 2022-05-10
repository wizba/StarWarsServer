const axios = require('axios');


module.exports.resolvers = {
    Query: {
      getOrders: (_, args) => {

       
        const orders = [
          {
            id: '1977',
            amount: 10.0,
            tax: 0.5,
            total: 10.5,
          },
          {
            id: '1978',
            amount: 20.0,
            tax: 1.0,
            total: 21.0,
          },
          {
            id: '1979',
            amount: 30.0,
            tax: 1.5,
            total: 31.5,
          },
        ];
  
        return orders;
      },
    
      getCharecters:async (_, args) => {

       const res = await axios.get('https://swapi.dev/api/people/');

       const {results} =res.data;
console.log(res.data);
        // .then(res=>{
        //   console.log(res.data.results)
        // })
      

        return results;
      },
      getPeople: async (_, args) => {

      
        const res = await axios.get('https://swapi.dev/api/people/');

        const {results,next,previous} =res.data;
 console.log(res.data);
         // .then(res=>{
         //   console.log(res.data.results)
         // })
       

        return {results,next,previous};
      },
      
      getAndFilter:async (_, args) => {

        const {gender,mass,height,openText,url} =args;
        // let results =[]
        let response ={};
        

        try{
          const res = await axios.get(url ===''? 'https://swapi.dev/api/people/':url);
          console.log(res);
          response =res.data;
          
        }catch(e){
          console.log(e)
        }

        let {results,next,previous} =response;


        if(gender !== ''){
          results = results.filter(item=>{
            return item.gender === gender
          })
        }

        if(height !== 0){
          results = results.filter(item=>{
            return item.height <= height
          })
        }

        if(mass !== 0){
          results = results.filter(item=>{
            return item.mass >= mass
          })
        }

        if(openText !== ''){
          results = results.filter(item=>{
            return item.name.toLowerCase().includes(openText.toLowerCase())
          })
        }

        console.log({results,next,previous});
        return {results,next,previous};
      },
      
      getHomeWorld:async (_, args) => {
          
          const {url} =args;
          let response ={};
          try{
            const res = await axios.get(url);
            console.log(res);
            response =res.data;
          }catch(e){
            console.log(e)
          }
          
          return response;
      }
      
    },

    Mutation:{
      getOrderByPage:async (_, args) => {
        let results =[]
    
        console.log(args.url);
        try{
          const res = await axios.get(args.url);
          results =res.data.results;
        }catch(e){
          console.log(e)
        }
            
        return results;
        },

        getAndFilterPeople:async (_, args) => {

          const {gender,mass,height,openText,url} =args;
          // let results =[]
          let response ={};
          
  
          try{
            const res = await axios.get(url ===''? 'https://swapi.dev/api/people/':url);
            console.log(res);
            response =res.data;
            
          }catch(e){
            console.log(e)
          }
  
          let {results,next,previous} =response;
  
  
          if(gender !== ''){
            results = results.filter(item=>{
              return item.gender === gender
            })
          }
  
          if(height !== 0){
            results = results.filter(item=>{
              return item.height <= height
            })
          }
  
          if(mass !== 0){
            results = results.filter(item=>{
              return item.mass <= mass
            })
          }
  
          if(openText !== ''){
            results = results.filter(item=>{
              return item.name.toLowerCase().includes(openText.toLowerCase())
            })
          }
  
          console.log({results,next,previous});
          return {results,next,previous};
        }
      },

     
    
  };