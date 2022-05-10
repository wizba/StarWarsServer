const { gql } = require('apollo-server-lambda');

module.exports.typeDefs = gql`
  type Orders {
    id: String!
    amount: Float!
    tax: Float!
    total: Float!
  }

  type StarWars{
    name:String
    height:String
    gender:String
    homeworld: String
    
  }

  type HomeWorld{
    name:String,
    rotation_period:String,
    orbital_period:String,
    diameter:String,
    gravity:String,
    climate:String,
    population:String,
    terrain:String
  }

  type Query{
    getCharecters:[StarWars]
    getAndFilter(gender:String,mass:Int,height:Int,openText:String,url:String):StarWars2
    getHomeWorld(url:String):HomeWorld
  }
  type Query {
    getOrders: [Orders]
  }
 
  type StarWars2{
    next:String
    previous:String
    results:[StarWars]
  }
 
 type Query{
    getPeople:StarWars2

  }

  type Mutation{
    getOrderByPage(url:String):[StarWars]
   
  }

  type Mutation{
    getAndFilterPeople(gender:String,mass:Int,height:Int,openText:String,url:String):StarWars2
  }
  
  `;